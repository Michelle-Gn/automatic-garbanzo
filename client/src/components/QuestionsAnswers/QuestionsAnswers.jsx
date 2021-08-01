import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Questions from './Questions.jsx';
import getQuestions from '../../actions/Q&A/getQuestions.js';

	const QuestionsAnswers = (props) => {

    const dispatch = useDispatch();
		useEffect(() => {getQuestions(dispatch, '16058', 1, 1000)}, []);
		const localState = useSelector(((globalState) => globalState.questions));

	  const [count, setCount] = useState(4);
		let qaList = localState.slice(0, count);

		if (qaList.length !== 0) {
			return (
				<div>
					<h3> QUESTIONS AND ANSWERS </h3>
					<nav className="navbar">
						<div className="row">
							<div className="col-md-6 offset-md-3">
							<div className="search-bar form-inline">
									<input
										className="form-control"
										type="text"
										placeholder= "HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
									<button className="btn hidden-sm-down">
										<span className="glyphicon glyphicon-search"></span>
									</button>
							</div>
							</div>
						</div>
					</nav>
					<div>
						<Questions qaList = {qaList}/>
					<button className = "more-questions">
						MORE ANSWERED QUESTIONS
					</button>
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
