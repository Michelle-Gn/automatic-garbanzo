import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import QuestionsEntry from './QuestionsEntry.jsx';
import getQuestions from '../../actions/Q&A/getQuestions.js';

var Questions = (props) => {
 // uses an action and dispatches it to the store to modify state
 // the action is passed through all the reducers in the store and the relevant
 // reducer uses the action to change state

	const dispatch = useDispatch();
// defines dispatch
  getQuestions(dispatch, '16058');
// invokes the getQuestions action, with dispatch as arg1, and product_id as arg 2
	const questions = useSelector(state => state.questions)
// useSelector gets pieces of data from global state

	return (
		<div>
			<ul>
				{questions.map((question, index) => (
					<QuestionsEntry question = {question} key = {index}/>
				))}
			</ul>
		</div>
	)
}


	export default Questions


	// getAnswer() {
	// 	axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${this.state.product_id}`,
	// 	{ headers: {'Authorization': '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'}})
	// 	.then((results) => {
	// 		this.setState ({
	// 			allQuestions: results.data.results
	// 		})})
	// 	.catch((error) => {
	// 		console.log(error)
	// 	});
	// }