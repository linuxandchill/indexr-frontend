import React from 'react';
import './searchbox.css';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const paperQuery = gql`
  {
    papers {
      title
      id
      similar {
        title
        id
      }
    }
  }
`

class Searchbox extends React.Component {


  constructor(props) {
    super(props);
    this.state = {searchValue: '', searchResults: null};

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);

  }

  handleSearchChange(event){
    this.setState({searchValue: event.target.value})
  }

  displayResults(){
    if(this.state.searchResults){
    return this.state.searchResults.map(paper => {
      return(<div key={paper.id}>{paper.title}</div>)
    })
    }
  return (<p>results will show here...</p>)
  }

  submitQuery(event) {

    console.log(this.state.searchValue);
    event.preventDefault();
    let data = this.props.data;
    if(data.loading){
      return (<div>Loading Papers</div>)
    }else{
      this.setState({searchResults: data.papers})
    }

  }


  render(){

    return(
      <div className="searchbox-container">
        <div className="searchbox">
          <div className="searchbox-top">
          Enter the URL of a paper on <a href="arxiv.org">arxiv.org</a> or the paper's ID number
          </div>
          <div className="searchbox-form">
            <form onSubmit={this.submitQuery}>
            <div className="input-container">
              <input type="text" className="searchbox-input" value={this.state.searchValue} onChange={this.handleSearchChange} name="paper" />
            </div>
            <div className="input-container">
              <button className="button button-search" type="submit" onClick={() => console.log('searching')}>find similar papers</button>
            </div>
            </form>

          </div>

          <div id="papers">
            {this.displayResults()}
          </div>

        </div>
      </div>
    )
  }

}



export default     graphql(paperQuery)(Searchbox);
