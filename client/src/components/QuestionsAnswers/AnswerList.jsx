import React from 'react';

class AnswerList extends React.Component {
	  constructor(props){
	    super(props);
	    this.state = {
	      question_id : this.props.question_id,
	      all_answers : []
	    }
	  }

	  componentDidMount(){
	    getAnswers()
	  }

	  getAnswers(){
	    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${this.state.question_id}/answers`,
	    { headers: {'Authorization': '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'}})
	    .then((results) => {
	      this.setState ({
	        allQuestions: results.data.results
	      })})
	    .catch((error) => {
	      console.log(error)
	    });
	  }


	  render() {
	    return (
	      <div>
	        <li> {this.props.question.question_body} </li>
	          <span>Helpful? Yes ({this.props.question.question_helpfulness})</span>
	          <span>Add Answer</span>
	            <div>A: Icing macaroon bear claw jelly beans chocolate cake</div>
	              <span className = "posted-date"> by User1234, January 1, 2019</span>
	              <span className = "helpful count"> Helpful? Yes (2)</span>
	              <span className = "report">Report</span>
	      </div>
	    )
	  }
	}

	export default AnswerList
