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
		let sortedAnswerList = answers.sort((a, b) => b.helpfulness - a.helpfulness);
	  let answerList = sortedAnswerList.slice(0, count);

		const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness)

	  // create variable and set it equal to global piece of state for shown
		const dispatch = useDispatch();
		useEffect(() => {toggleShow(dispatch, true)}, []);

		const localState = useSelector(((globalState) => globalState.answerFormStatus));

		if (answerList.length !== 0) {
			return (
			<div>

				<div className = 'question-half'>
					<div> <b>{'Q: ' + props.question.question_body}</b> </div>
						<div className = 'question-buttons'>
							<Helpful question = {props.question} />
							<Button onClick = {()=> {toggleShow(dispatch, localState)}}>Add Answer</Button>
							<AnswerForm show = {localState}
							question = {props.question}
							question_id = {props.question.question_id}
							product = {props.product}/>
						</div>
				</div>

				<div className = 'answer-half'>
				  <div>A:</div>
				    <div>
						{answerList.map((answer) => (
							<Answer answer = {answer} key = {answer.answer_id}/>
						))}
						</div>
						{(count < answers.length) &&
						<span className = "more-answers" onClick = {()=> setCount(answers.length)}>See More Answers</span>}
						{(count > 2 && count === answers.length) &&
						<span className = "collapse-answers" onClick = {() => setCount(2)}>Collapse answers</span>}
				</div>
			</div>
			)
		} else {
			return null;
		}
}

export default QuestionsEntry
