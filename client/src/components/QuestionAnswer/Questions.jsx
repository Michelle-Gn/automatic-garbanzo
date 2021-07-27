import React from 'react';
import axios from 'axios';
import QuestionsEntry from './QuestionsEntry.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id : 16056,
      allQuestions: [],
      allAnswers: [],
      currentQuestions: []
    };

    this.getQuestions = this.getQuestions.bind(this)
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${this.state.product_id}`,
    { headers: {'Authorization': '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'}})
    .then((results) => {
      this.setState ({
        allQuestions: results.data.results
      })})
    .catch((error) => {
      console.log(error)
    });
  }

  getAnswer() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${this.state.product_id}`,
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
        <ul>
          {this.state.allQuestions.map((question, index) => (
            <QuestionsEntry question = {question} key = {index}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default Questions
