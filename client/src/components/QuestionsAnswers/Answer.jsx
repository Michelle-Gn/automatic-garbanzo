import React, {useState} from 'react';
import moment from 'moment';
import AnswerHelpful from './AnswerHelpful.jsx';
import AnswerReport from './AnswerReport.jsx';

var Answer = (props) => {
  return (
  <div className='divInline'>
    <div className='divInline answer-body'> {props.answer.body}</div>
      <div>
        <div className='divInline answer-info'>by: {props.answer.answerer_name + ", " + moment(props.answer.date).format('MMMM D, YYYY')}</div>
        <AnswerHelpful answer={props.answer} />
        <AnswerReport answer_id={props.answer.answer_id} />
      </div>
  </div>
  )
}

export default Answer