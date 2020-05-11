import React from 'react';
import './header.css';
import githubLogo from './github.png';

function Header(){
  return (
    <div class="header-container">

      <div className="header">
        <div className="header-left">

          <div className="header-brand">
            indexr
          </div>


        </div>
        <div className="header-right">
        <a href="https://github.com/dwrodri/indexr-py-backend">
          <div className="repo-link"><img src={githubLogo} alt="github repo"/></div>
        </a>

        </div>
      </div>

      <div class="header-tagline">
indexr, find similar papers
      </div>

    </div>



)
}

export default Header;
