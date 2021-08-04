import React, {useState} from 'react';
import moment from 'moment';
import AnswerHelpful from './AnswerHelpful.jsx';
import AnswerReport from './AnswerReport.jsx';

var Answer = (props) => {
  return (
  <div>
    <div> {props.answer.body} </div>
    <div>{props.answer.answerer_name + ", " + moment(props.answer.date).format("MMM Do YY")}</div>
    <AnswerHelpful answer = {props.answer} />
    <AnswerReport answer_id = {props.answer.answer_id} />
  </div>
  )
}

export default Answer