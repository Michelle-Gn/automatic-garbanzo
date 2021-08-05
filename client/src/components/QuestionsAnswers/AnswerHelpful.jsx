import React, {useState} from 'react';
import updateAnswerHelpfulness from '../../actions/Q&A/updateAnswerHelpfulness.js'

var AnswerHelpful = (props) => {

  const [count, setCount] = useState(props.answer.helpfulness);

  return (
    <div>
      <span className="answerHelpful">Helpful?</span>
      <span className="answerHelpful-stats"
      onClick={(e) => {
        e.preventDefault()
        updateAnswerHelpfulness(props.answer.answer_id)
        .then(() => {setCount(count + 1)})
        .catch((error) => {console.log(error)})
      }}>Yes ({count}) </span>
    </div>
  )
}

export default AnswerHelpful