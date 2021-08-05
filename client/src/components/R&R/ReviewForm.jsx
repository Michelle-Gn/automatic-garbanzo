import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import StarRating from './SubmitStarRating.jsx';
import CharacteristicRating from './CharacteristicRating.jsx';


const ReviewForm = (props) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [charsToSend, setCharsToSend] = useState({});
  const [errors, setErrors] = useState({});

  const name = useSelector(state => state.getNewProductReducer.selectedProduct.name);
  const characteristics = useSelector(state => state.ratingsMeta.characteristics) || {};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setField = (field, val) => {
    setForm({
      ...form,
      [field]: val
    });
  };

  const setChar = (charId, val) => {
    setCharsToSend({
      ...charsToSend,
      [charId]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  return (
    <div>
      <button onClick={handleShow}>
        ADD A REVIEW&#160;&#160;&#160;&#160;&#160;+
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
          <h2>Write Your Review</h2>
          <h6>About the {name}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <StarRating setField={setField} />
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control type='name' placeholder='jackson11!' onChange={(e) => setField('reviewer_name', e.target.value)}/>
              <Form.Text>For privacy reasons, do not use your full name or email address</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='jackson11@email.com' onChange={(e) => setField('email', e.target.value)}/>
              <Form.Text>For authentication reasons, you will not be emailed</Form.Text>
            </Form.Group>
            <div key='inline-recommend'>
              <Form.Group>
                <Form.Label>Do you recommend this product?&#160;</Form.Label>
                <Form.Check inline label='Yes' name='group1' type='radio' id='recommend-1' onChange={(e) => setField('recommend', true)}/>
                <Form.Check inline label='No' name='group1' type='radio' id='recommend-2' onChange={(e) => setField('recommend', false)}/>
              </Form.Group>
            </div>
            <div>
              {Object.keys(characteristics).map((char, i) => {
                return <CharacteristicRating char={char} key={'char-' + i} setChar={setChar} charId={String(Object.values(characteristics)[i].id)}/>
              })}
            </div>
            <br/>
            <Form.Group>
              <Form.Label>Review Summary</Form.Label>
              <Form.Control as='textarea' rows={1} placeholder='Example: Best purchase ever!' onChange={(e) => setField('summary', e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Review Body</Form.Label>
              <Form.Control as='textarea' rows={10} placeholder='Why did you like the product or not?' onChange={(e) => setField('body', e.target.value)} />
            </Form.Group>
            <Form.Group controlId='formFileMultiple'>
              <Form.Label>Upload product images</Form.Label>
              <Form.Control type='file' multiple />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={(e) => setField('characteristics', charsToSend)}>Submit Review</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default ReviewForm;