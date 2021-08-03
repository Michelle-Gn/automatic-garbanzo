import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import StarRating from './SubmitStarRating.jsx';

const ReviewForm = (props) => {
  const [show, setShow] = useState(false);
  const name = useSelector(state => state.getNewProductReducer.selectedProduct.name)

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