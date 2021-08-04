import React, {useState} from 'react';

const SearchBar = (props) => {

  return (
  <div>
    <nav className="navbar">
      <div className="row">
        <div className="col-md-50">
        <div className="search-bar">
            <input
              onChange = {(e) => {
                props.setSearch(e.target.value)
              }}
              className="form-control"
              type="text"
              placeholder= "HAVE A QUESTION? SEARCH FOR ANSWERS..."
              value = {props.search}/>
            <button className="btn hidden-sm-down">
              <span className="glyphicon glyphicon-search"></span>
            </button>
        </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default SearchBar;