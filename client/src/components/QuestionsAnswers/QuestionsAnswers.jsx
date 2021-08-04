import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionForm from './QuestionForm.jsx';
import getQuestions from '../../actions/Q&A/getQuestions.js';
import toggleShow from '../../actions/Q&A/toggleShow.js';

const QuestionsAnswers = (props) => {

  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

	const dispatch = useDispatch();
	useEffect(() => {getQuestions(dispatch, product.id, 1, 1000)}, [product]);
	const localState = useSelector(((globalState) => globalState.questions));
	const shownState = useSelector(((globalState) => globalState.answerFormStatus));
	const sortedLocalState = localState.sort((a, b) => b.question_helpfulness - a.question_helpfulness);

	const [search, setSearch] = useState('');
	const [count, setCount] = useState(4);

	if (search.length >= 3) {
		var qaList = sortedLocalState.filter(question => (question.question_body.includes(search)))
	} else {
		qaList = sortedLocalState.slice(0, count);
	}

	if (localState.length !== 0) {
		return (
			<div>
				<SearchBar searchField = {search} setSearch = {setSearch}/>
				<div>
				<Questions qaList = {qaList}/>
				{(count < localState.length && search.length < 3) &&
				<button className = "more-questions" onClick = {() => setCount(count + 2)}>
					MORE ANSWERED QUESTIONS
				</button>}
				<Button className = "add-question" onClick = {()=> {toggleShow(dispatch, shownState)}}>
					ADD A QUESTION +
				</Button>
				<QuestionForm product = {product.id} show = {shownState}/>
				</div>
			</div>
		)
	} else {
		return null
	}
}

export default QuestionsAnswers
