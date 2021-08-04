import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import StarRating from './SubmitStarRating.jsx';
import CharacteristicRating from './CharacteristicRating.jsx'

const ReviewForm = (props) => {
  const [show, setShow] = useState(false);
  const name = useSelector(state => state.getNewProductReducer.selectedProduct.name);
  const characteristics = useSelector(state => state.ratingsMeta.characteristics) || {}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        ADD A REVIEW&#160;&#160;&#160;&#160;&#160;+
      </Button>
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
          <StarRating />
          <Form>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control type='name' placeholder='jackson11!' />
              <Form.Text>For privacy reasons, do not use your full name or email address</Form.Text>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='jackson11@email.com' />
              <Form.Text>For authentication reasons, you will not be emailed</Form.Text>
            </Form.Group>
            <div key='inline-recommend'>
              <br/>
              <Form.Label>Do you recommend this product?&#160;</Form.Label>
              <Form.Check inline label='Yes' name='group1' type='radio' id='recommend-1' />
              <Form.Check inline label='No' name='group1' type='radio' id='recommend-2' />
            </div>
            <div>
              {Object.keys(characteristics).map((char, i) => {
                return <CharacteristicRating char={char} key={'char-' + i}/>
              })}
            </div>
            <Form.Control as='select'>
              {Object.keys(characteristics).map((char, i) => {
                <CharacteristicRating char={char} key={i} />
              })}
            </Form.Control>
            <Form.Group>
              <Form.Label>Review Summary</Form.Label>
              <Form.Control as='textarea' rows={1} placeholder='Example: Best purchase ever!' />
              <Form.Label>Review Body</Form.Label>
              <Form.Control as='textarea' rows={10} placeholder='Why did you like the product or not?' />
            </Form.Group>
            <Form.Group controlId='formFileMultiple'>
              <Form.Label>Upload product images</Form.Label>
              <Form.Control type='file' multiple />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary'>Submit Review</Button>
          {/* <Button variant='secondary' onClick={handleClose}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default ReviewForm;