import React, {useState} from 'react';

const SearchBar = (props) => {

  return (
  <div>
  <h3> QUESTIONS AND ANSWERS </h3>
    <nav className="navbar">
      <div className="row">
        <div className="col-md-50 offset-md-3">
        <div className="search-bar form-inline">
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