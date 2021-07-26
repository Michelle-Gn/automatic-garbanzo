import React from 'react';

var QuestionsEntry = (props) => (
  <div>
    <li> {props.question.question_body} </li>
      <span>Helpful? Yes (25)</span>
      <span>Add Answer</span>
        <div>A: Icing macaroon bear claw jelly beans chocolate cake</div>
          <span className = "posted-date"> by User1234, January 1, 2019</span>
          <span className = "helpful count"> Helpful? Yes (2)</span>
          <span className = "report">Report</span>
  </div>

)

export default QuestionsEntry