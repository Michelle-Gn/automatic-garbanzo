import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CharacteristicRating = ({char}) => {
  console.log(char);

  return (
    <div>
      <Form>
        <Form.Label>{char}</Form.Label>
      </Form>
    </div>
  );
};

export default CharacteristicRating;