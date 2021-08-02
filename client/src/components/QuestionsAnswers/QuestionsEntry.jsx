import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import getAnswers from '../../actions/Q&A/getAnswers.js';
import toggleShow from '../../actions/Q&A/toggleShow.js';

import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';
import AnswerForm from './AnswerForm.jsx';

var QuestionsEntry = (props) => {

		const [answers, setAnswers] = useState([]);
    useEffect(() => {getAnswers(props.question.question_id)
			.then((result) => {
			setAnswers (result.data.results);
		  })
			.catch((error) => {console.log(error)})}, []);

		// slice answer list to get only 2 answers
		const [count, setCount] = useState(2);
	  let answerList = answers.slice(0, count);

		const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness)

		// sort answer list

	  // create variable and set it equal to global piece of state for shown
		const dispatch = useDispatch();
		useEffect(() => {toggleShow(dispatch, true)}, []);

		const localState = useSelector(((globalState) => globalState.answerFormStatus));

		if (answerList.length !== 0) {
			return (
			<div>
				<div> {'Q: ' + props.question.question_body} </div>
				<Helpful question = {props.question} />
				<Button onClick = {()=> {toggleShow(dispatch, localState)}}>Add Answer</Button>
			  <AnswerForm show = {localState} question_id = {props.question.question_id}/>
				<div>
				{answerList.map((answer) => (
					<Answer answer = {answer} key = {answer.answer_id}/>
				))}
				</div>
			</div>
			)
		} else {
			return null;
		}
}

	export default QuestionsEntry
