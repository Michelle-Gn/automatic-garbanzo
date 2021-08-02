import React, {useSelector} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import toggleShow from '../../actions/Q&A/toggleShow.js';

var AnswerForm = (props) => {

const dispatch = useDispatch();

  return (
  <Modal show = {props.show}>
    <Form >
      <Form.Group className="mb-3" controlId= {`exampleForm.ControlInput${props.question_id}`}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId={`exampleForm.ControlTextarea${props.question_id}`}>
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button onClick = {()=> {toggleShow(dispatch, props.show)}}>
        Close Form
      </Button>
    </Form>
  </Modal>
  );
}

export default AnswerForm




{/* <Modal show = {props.localState}>
    <Modal.Header>Modal Head Part</Modal.Header>
    <Modal.Body>
      Hi, React modal is here
    </Modal.Body>
    <Modal.Footer>
      <Button onClick = {()=> {toggleShow(dispatch, props.localState)}}>
        Close Modal
      </Button>
      </Modal.Footer>
    </Modal> */}