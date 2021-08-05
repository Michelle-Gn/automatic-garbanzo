import React, {useState} from 'react';
import reportAnswer from '../../actions/Q&A/reportAnswer.js';

var AnswerReport = (props) => {

  return (
    <div>
      <span className = "report" onClick = {(e) => {
        e.preventDefault()
        reportAnswer(props.answer_id)
        .then(() => {console.log('answer reported')})
      }}><b>Report</b></span>
    </div>
  )
}

export default AnswerReport