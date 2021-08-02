import React, {useState} from 'react';
import moment from 'moment';
import AnswerHelpful from './AnswerHelpful.jsx';


// one answer entry
  // format here
var Answer = (props) => {
  return (
  <div>
    <div> {props.answer.body} </div>
    <div>{props.answer.answerer_name + ", " + moment(props.answer.date).format("MMM Do YY")}</div>
    <AnswerHelpful answer = {props.answer} />
  </div>
  )
}

// child component: helpfulness
   // create local state to see helpfulness incremented

export default Answer