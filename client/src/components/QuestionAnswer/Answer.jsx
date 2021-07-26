import React from 'react';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default'
    }
  }


  render() {
    return (
      if(this.state.view === 'default') {
        /* render the first 2 questions and answers */
        return < DefaultQuestionList /> ;
      }
        /* render all of the questions*/
        return < FullQuestionList /> ;
    )
  }
    /* make button to trigger whole view*/
}

export default QuestionsList