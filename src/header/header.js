import React from 'react';
import './header.css';
import githubLogo from './github.png';
import indexrLogo from './coat.png';

function Header(){
  return (
    <div className="header-container">

      <div className="header">
        <div className="header-left">

          <div className="header-brand">
          <img className="header-logo" src={indexrLogo} alt="indexr, a search engine for simialr papers" />
            indexr
          </div>


        </div>
        <div className="header-right">
        <a href="https://github.com/dwrodri/indexr-py-backend">
          <div className="repo-link"><img src={githubLogo} alt="github repo"/></div>
        </a>

        </div>
      </div>

      <div className="header-tagline">
indexr, find similar papers
      </div>

    </div>



)
}

export default Header;
