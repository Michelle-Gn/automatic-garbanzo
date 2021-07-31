import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAnswers from '../../actions/Q&A/getAnswers.js';

import Answer from './Answer.jsx'

	var QuestionsEntry = (props) => {
    // make api call to get answer using props
		const dispatch = useDispatch();
		console.log(props.question.question_id);
		const [answers, setAnswers] = useState([]);
    useEffect(() => {getAnswers(props.question.question_id)
			.then((result) => {
			setAnswers (result.data.results);
		  })
			.catch((error) => {console.log(error)})}, []);

		// const localState = useSelector(((globalState) => globalState.answers));

		// slice answer list to get only 2 answers
		const [count, setCount] = useState(2);
	  let answerList = answers.slice(0, count);
		console.log(answerList);

		// map over each entry
		// sort answer list
    // var answerslist = useSelector()
		if (answerList.length !== 0) {
			return (
			<div>
				<div> {'Q: ' + props.question.question_body} </div>
				<span className = "helpful">Helpful?</span>
				<span className = "helpfulness-stats"> Yes ({props.question.question_helpfulness})</span>
				<span>Add Answer</span>
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
