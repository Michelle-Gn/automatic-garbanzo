import React from 'react';
import axios from 'axios';
import config from '../../../../config.js';

const ReviewReport = ({reviewId}) => {
  const handleReport = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${reviewId}/report`, { headers: {'Authorization': config} })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <button id='report' onClick={handleReport}>Report</button>
  );
};

export default ReviewReport;