import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import QuestionsEntry from './QuestionsEntry.jsx';
import getQuestions from '../../actions/Q&A/getQuestions.js';

var Questions = (props) => {
if (props.qaList.length !== 0){
	return (
		<div>
			<div>
				{props.qaList.map((question) => (
          <QuestionsEntry question = {question} key = {question.question_id}/>
				))}
			</div>
		</div>
	)
} else {
	return null;
}
}

export default Questions