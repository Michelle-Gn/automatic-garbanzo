import React, {useState} from 'react';
import updateAnswerHelpfulness from '../../actions/Q&A/updateAnswerHelpfulness.js'

var AnswerHelpful = (props) => {

  const [count, setCount] = useState(props.answer.helpfulness);

  return (
    <div className="divInline">
      <div className="divInline question-button">Helpful?</div>
      <div className="divInline question-button"
      onClick={(e) => {
        e.preventDefault()
        updateAnswerHelpfulness(props.answer.answer_id)
        .then(() => {setCount(count + 1)})
        .catch((error) => {console.log(error)})
      }}>Yes ({count})</div>
    </div>
  )
}

export default AnswerHelpful