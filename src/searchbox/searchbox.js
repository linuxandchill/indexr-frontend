import React from 'react';
import './searchbox.css';

class Searchbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchValue: ''};

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);

  }

  handleSearchChange(event){
    this.setState({searchValue: event.target.value})
  }

  submitQuery(event) {
    console.log(this.state.searchValue);
    event.preventDefault();
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
              <button className="button button-search" type="submit">search</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}



export default Searchbox
