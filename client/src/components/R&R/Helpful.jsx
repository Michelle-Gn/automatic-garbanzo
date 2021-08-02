import React, { useState, useEffect } from 'react';
import ReviewReport from './ReviewReport.jsx';
import axios from 'axios';
import config from '../../../../config.js';

const Helpful = ({helpfulness, reviewId}) => {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);

  const handleHelpfulClick = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${reviewId}/helpful`, { headers: {'Authorization': config} })
      .then(() => setHelpfulCount(helpfulCount + 1))
      .catch(err => console.log(err, 'Helpful click failed'));
  }

  return (
    <p id='helpful-ask'>
      Helpful?
      <button onClick={handleHelpfulClick}>Yes</button>({helpfulCount})
      <ReviewReport reviewId={reviewId} />
    </p>
  );
};

export default Helpful;