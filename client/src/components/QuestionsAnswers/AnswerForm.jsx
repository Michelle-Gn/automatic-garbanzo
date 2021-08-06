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

const [question, setQuestion] = useState(props.questionbody);
console.log('question', question);

  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>
            <h2>Submit your Answer</h2>
            <h6>{props.product}</h6>
            <h6>{question}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId={`exampleFormName.ControlInput${props.question_id}`}>
              <Form.Label>What is your nickname</Form.Label>
              <Form.Control
              onChange={
                (e) => {setName(e.target.value)}
              }
              value={name}
              type="name"
              placeholder="Example: jack5431!"/>
              <Form.Label>For privacy reasons, do not use your full name or email address</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${props.question_id}`}>
              <Form.Label>Your email</Form.Label>
              <Form.Control
              onChange={
                (e) => {setEmail(e.target.value)}
              }
              value={email}
              type="email"
              placeholder="jack@example.com"/>
              <Form.Label>For authentication reasons, you will not be emailed</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId={`exampleForm.ControlTextarea${props.question_id}`}>
              <Form.Label>Your Answer</Form.Label>
              <Form.Control
              onChange={
                (e) => {setAnswer(e.target.value)}
              }
              as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=> {toggleShow(dispatch, props.show)}}>
            Close Form
          </Button>
          <Button onClick={(e) => {
            e.preventDefault()
            addAnswer(props.question_id, answer, name, email)
            .then((results) => console.log(results + 'added!'))
            .catch((error) => console.log(error))
            }}>
            Submit Answer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AnswerForm