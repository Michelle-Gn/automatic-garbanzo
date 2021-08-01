import React from 'react';

// one answer entry
  // format here
var Answer = (props) => {
  return (
    <div> {'A:' + props.answer.body}</div>
  )
}

// child component: helpfulness
   // create local state to see helpfulness incremented

export default Answer