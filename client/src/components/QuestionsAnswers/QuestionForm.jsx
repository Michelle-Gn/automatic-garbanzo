import React, {useSelector, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import toggleShowQuestion from '../../actions/Q&A/toggleShowQuestion.js';
import addQuestion from '../../actions/Q&A/addQuestion.js';

var QuestionForm = (props) => {

const dispatch = useDispatch();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [question, setQuestion] = useState('');

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>
          <h2>Ask Your Question</h2>
          <h6>About {props.productName}</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId={`exampleFormName.ControlInput${props.product}`}>
          <Form.Label>What is your nickname</Form.Label>
          <Form.Control
          onChange={
            (e) => {setName(e.target.value)}
          }
          value={name}
          type="name"
          placeholder="jackson11"/>
          <Form.Label>For privacy reasons, do not use your full name or email address</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId= {`exampleForm.ControlInput${props.product}`}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
          onChange={
            (e) => {setEmail(e.target.value)}
          }
          value={email}
          type="email"
          placeholder="name@example.com"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId={`exampleForm.ControlTextarea${props.question_id}`}>
          <Form.Label>Your Question</Form.Label>
          <Form.Control
          onChange={
            (e) => {setQuestion(e.target.value)}
          }
          as="textarea" rows={3} />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> {toggleShowQuestion(dispatch, props.show)}}>
          Close Form
        </Button>
        <Button onClick={(e) => {
          e.preventDefault()
          addQuestion(props.product, question, name, email)
          .then((results) => console.log(results + 'added!'))
          .catch((error) => console.log(error))
          }}>
          Submit Question
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default QuestionForm