import React, {useState} from 'react';
import updateHelpfulness from '../../actions/Q&A/updateHelpfulness.js';

var Helpful = (props) => {

  const [count, setCount] = useState(props.question.question_helpfulness);

  return (
  <div>
    <span className = "helpful">Helpful?</span>
    <span className = "helpfulness-stats"
    onClick = {(e) => {
      e.preventDefault()
      updateHelpfulness(props.question.question_id)
      .then(() => {setCount(count + 1)})
      .catch((error) => {console.log(error)})
    }}>
      Yes ({count})</span>
  </div>
  )
}

export default Helpful
