import React, {useState} from 'react';
import reportAnswer from '../../actions/Q&A/reportAnswer.js';

var AnswerReport = (props) => {

  return (
    <div className='divInline'>
      <div className='divInline answer-button' onClick={(e) => {
        e.preventDefault()
        reportAnswer(props.answer_id)
        .then(() => {console.log('answer reported')})
      }}><b>Report</b></div>
    </div>
  )
}

export default AnswerReport