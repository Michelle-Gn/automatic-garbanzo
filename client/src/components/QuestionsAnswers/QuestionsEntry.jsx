import React from 'react';
import AnswerList from './AnswerList.jsx';

	var QuestionsEntry = (props) => (
	  <div>
	    <li> {props.question.question_body} </li>
	      <span>Helpful? Yes ({props.question.question_helpfulness})</span>
	      <span>Add Answer</span>
	    <AnswerList question_id = {props.question.question_id}/>
	  </div>
	)

	export default QuestionsEntry
