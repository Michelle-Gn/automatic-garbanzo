import React from 'react';
import Breakdown from './Breakdown/Breakdown.jsx';
import ReviewListContainer from '../containers/R&R/reviewListContainer.js';
// import helpers

const ReviewsRatings = (props) => {
  // useState for current product ID

  // get ratings data with current product ID
  // useEffect for metaData

  return (
    <div>
      <h1>Ratings &amp; Reviews</h1>
      <Breakdown />
      <ReviewListContainer />
    </div>
  )
};

export default ReviewsRatings;