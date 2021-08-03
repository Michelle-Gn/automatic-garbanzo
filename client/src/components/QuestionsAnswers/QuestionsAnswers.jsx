import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar.jsx';
import getQuestions from '../../actions/Q&A/getQuestions.js';

const QuestionsAnswers = (props) => {

  const product = useSelector(state => state.getNewProductReducer.selectedProduct)
	console.log('product_id', product.id)

	const dispatch = useDispatch();
	useEffect(() => {getQuestions(dispatch, product.id, 1, 1000)}, [product]);
	const localState = useSelector(((globalState) => globalState.questions));
	const sortedLocalState = localState.sort((a, b) => b.question_helpfulness - a.question_helpfulness);

	const [count, setCount] = useState(4);
	let qaList = sortedLocalState.slice(0, count);

	const [search, setSearch] = useState('');
	if (search.length > 3) {
		let filteredList = sortedLocalState.filter(sortedLocalState.question_body.includes(search))
	}

	if (qaList.length !== 0) {
		return (
			<div>
				<SearchBar searchField = {search} setSearch = {setSearch}/>
				<div>
				<Questions qaList = {qaList}/>
				{count < localState.length &&
				<button className = "more-questions" onClick = {() => setCount(count + 2)}>
					MORE ANSWERED QUESTIONS
				</button>}
				<button className = "add-question">
					ADD A QUESTION +
				</button>
				</div>
			</div>
		)
	} else {
		return null
	}
}

export default QuestionsAnswers
