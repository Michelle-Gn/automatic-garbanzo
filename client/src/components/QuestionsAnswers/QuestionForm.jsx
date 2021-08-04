import React, {useSelector, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import toggleShow from '../../actions/Q&A/toggleShow.js';
import addQuestion from '../../actions/Q&A/addQuestion.js';

var QuestionForm = (props) => {

const dispatch = useDispatch();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [question, setQuestion] = useState('');

  return (
  <Modal show = {props.show}>
    <Form>
      <Form.Group className="mb-3" controlId = {`exampleFormName.ControlInput${props.product}`}>
        <Form.Label>Name</Form.Label>
        <Form.Control
        onChange = {
          (e) => {setName(e.target.value)}
        }
        value = {name}
        type = "name"
        placeholder = "name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId= {`exampleForm.ControlInput${props.product}`}>
        <Form.Label>Email address</Form.Label>
        <Form.Control
        onChange = {
          (e) => {setEmail(e.target.value)}
        }
        value = {email}
        type = "email"
        placeholder="name@example.com"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId={`exampleForm.ControlTextarea${props.question_id}`}>
        <Form.Label>Question</Form.Label>
        <Form.Control
        onChange = {
          (e) => {setQuestion(e.target.value)}
        }
        as="textarea" rows={3} />
      </Form.Group>
      <Button onClick = {()=> {toggleShow(dispatch, props.show)}}>
        Close Form
      </Button>
      <Button onClick = {(e) => {
        e.preventDefault()
        addQuestion(props.product, question, name, email)
        .then((results) => console.log(results + 'added!'))
        .catch((error) => console.log(error))
        }}>
        Submit Question
      </Button>
    </Form>
  </Modal>
  );
}

export default QuestionForm