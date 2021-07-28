import React from 'react';
import Questions from './Questions.jsx';

class QuestionsList extends React.Component {
  constructor () {
    super ();
    this.state = {
    questions: [],
    answers: [],
    view: 'default'};
  }

  render() {
    return (
      <div>
        <h3> QUESTIONS AND ANSWERS </h3>
        <nav className="navbar">
          <div className="row">
            <div className="col-md-6 offset-md-3">
            <div className="search-bar form-inline">
                <input
                  className="form-control"
                  type="text"
                  value= "HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
                <button className="btn hidden-sm-down">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
            </div>
            </div>
          </div>
        </nav>
        <div>
          <Questions/>
        <button className = "more-questions">
          MORE ANSWERED QUESTIONS
        </button>
        <button className = "add-question">
         ADD A QUESTION +
        </button>
        </div>
      </div>
    )
  }
}

export default QuestionsList