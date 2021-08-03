import React, {useSelector, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import toggleShow from '../../actions/Q&A/toggleShow.js';
import addAnswer from '../../actions/Q&A/addAnswer.js';

var AnswerForm = (props) => {

const dispatch = useDispatch();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [answer, setAnswer] = useState('');

  return (
  <Modal show = {props.show}>
    <Form>
      <Form.Group className="mb-3" controlId = {`exampleFormName.ControlInput${props.question_id}`}>
        <Form.Label>Name</Form.Label>
        <Form.Control
        onChange = {
          (e) => {setName(e.target.value)}
        }
        value = {name}
        type = "name"
        placeholder = "name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId= {`exampleForm.ControlInput${props.question_id}`}>
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
        <Form.Label>Answer</Form.Label>
        <Form.Control
        onChange = {
          (e) => {setAnswer(e.target.value)}
        }
        as="textarea" rows={3} />
      </Form.Group>
      <Button onClick = {()=> {toggleShow(dispatch, props.show)}}>
        Close Form
      </Button>
      <Button onClick = {(e) => {
        e.preventDefault()
        addAnswer(props.question_id, answer, name, email)
        .then((results) => console.log(results + 'added!'))
        .catch((error) => console.log(error))
        }}>
        Submit Answer
      </Button>
    </Form>
  </Modal>
  );
}

export default AnswerForm