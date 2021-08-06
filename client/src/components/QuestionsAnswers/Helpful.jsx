import React, {useState} from 'react';
import updateHelpfulness from '../../actions/Q&A/updateHelpfulness.js';

var Helpful = (props) => {

  const [count, setCount] = useState(props.question.question_helpfulness);

  return (
    <div className='divInline divFloat' >
      <div className="helpful divInline answer-button">Helpful?</div>
      <div className="helpfulness-stats divInline answer-button"
      onClick={(e) => {
        e.preventDefault()
        updateHelpfulness(props.question.question_id)
        .then(() => {setCount(count + 1)})
        .catch((error) => {console.log(error)})
      }}>
        Yes ({count})</div>
    </div>
  )
}

export default Helpful
