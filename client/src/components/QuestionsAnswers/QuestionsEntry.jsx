import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import getAnswers from '../../actions/Q&A/getAnswers.js';
import toggleShow from '../../actions/Q&A/toggleShow.js';
import setQuestion from '../../actions/Q&A/setQuestion.js';

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


		// const [question, setQuestion] = useState(props.question.question_body);
		// console.log('question', question);


			// slice answer list to get only 2 answers
		const [count, setCount] = useState(2);
		let sortedAnswerList = answers.sort((a, b) => b.helpfulness - a.helpfulness);
	  let answerList = sortedAnswerList.slice(0, count);

		const [helpfulness, setHelpfulness] = useState(props.question.question_helpfulness)

	  // create variable and set it equal to global piece of state for shown
		const dispatch = useDispatch();
		useEffect(() => {toggleShow(dispatch, true)}, []);

		const localState = useSelector(((globalState) => globalState.answerFormStatus));

    // get question id
		const localQuestionId = useSelector(((globalState) => globalState.questionId));

		if (answerList.length !== 0) {
			return (
			<div>

				<div className='question-half'>
					<div className='divInline'> <b>{'Q: ' + props.question.question_body}</b> </div>
							<Helpful question={props.question} />
							<button className='divFloat' onClick={()=> {
								toggleShow(dispatch, localState)
								setQuestion(dispatch, props.question.question_body)}}>Add Answer</button>
							<AnswerForm show={localState}
							question={props.question}
							questionbody={localQuestionId}
							question_id={props.question.question_id}
							product={props.product}/>
				</div>

				<div className='answer-half'>
				  <div className='divInline'>A:</div>
						{answerList.map((answer) => (
							<Answer answer={answer} key={answer.answer_id}/>
						))}
						{(count < answers.length) &&
						<div className="more-answers" onClick={()=> setCount(answers.length)}>See More Answers</div>}
						{(count > 2 && count === answers.length) &&
						<span className="collapse-answers" onClick={() => setCount(2)}>Collapse answers</span>}
				</div>
			</div>
			)
		} else {
			return null;
		}
}

export default QuestionsEntry
