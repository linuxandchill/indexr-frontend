import React from 'react';
import './searchbox.css';
import { gql } from 'apollo-boost';
import { graphql, withApollo, mutation } from 'react-apollo';
import { useMutation } from "@apollo/react-hooks";

const paperQuery = gql`
mutation createLink {
  createLink(input: { url: "https://www.google.com/" }) {
    id
  }
}
`

class Searchbox extends React.Component {


  constructor(props) {
    super(props);
    this.state = {searchValue: '', searchResults: null, searching: false};

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);

  }

  handleSearchChange(event){
    this.setState({searchValue: event.target.value})
  }


  _executeSearch = async () => {
    const { filter } = this.state;
    let result = await this.props.client.query({
      query: paperQuery,
      variables: {input: this.state.searchValue}
    });
    console.log(result)
    const searchResults = result.data.papers;
    this.setState({ searchResults: searchResults, searching: false });
  }

  displayResults(){
    if(this.state.searchResults){
//    return this.state.searchResults.map(paper => {
//      return(<div key={paper.id}>{paper.title}</div>)
//    })
      return this.state.searchResults
    }

  if(this.state.searching === true){
    return (<p>Searching...</p>)
  }
  return (<p>results will show here...</p>)
  }

  submitQuery(event) {

      event.preventDefault();
    this.setState({searching: true, searchResults: null}, () => {
      console.log(this.state);
      console.log(this.state.searchValue);
      this._executeSearch();
    });

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



export default withApollo(Searchbox);
