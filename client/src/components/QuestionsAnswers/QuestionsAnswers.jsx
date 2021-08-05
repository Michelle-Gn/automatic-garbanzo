import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionForm from './QuestionForm.jsx';
import getQuestions from '../../actions/Q&A/getQuestions.js';
import toggleShowQuestion from '../../actions/Q&A/toggleShowQuestion.js';

const QuestionsAnswers = (props) => {

  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

	const dispatch = useDispatch();

	useEffect(() => {
		if (product.id) {
		  getQuestions(dispatch, product.id, 1, 1000)
	  }
	}, [product]);
	const localState = useSelector(((globalState) => globalState.questions));
	useEffect(() => {toggleShowQuestion(dispatch, true)}, []);
	const shownState = useSelector(((globalState) => globalState.questionFormStatus));
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
			<div className='QA-container'>
				<h4> QUESTIONS AND ANSWERS </h4>
				<SearchBar searchField={search} setSearch={setSearch}/>
				<div>
				<Questions qaList={qaList} product={product.name}/>
				{(count < localState.length && search.length < 3) &&
				<button className="more-questions" onClick={() => setCount(count + 2)}>
					MORE ANSWERED QUESTIONS
				</button>}
				<Button className="add-question" onClick={()=> {toggleShowQuestion(dispatch, shownState)}}>
					ADD A QUESTION +
				</Button>
				<QuestionForm productName={product.name} product={product.id} show={shownState}/>
				</div>
			</div>
		)
	} else {
		return null
	}
}

export default QuestionsAnswers
