import React from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

const ReviewsRatings = (props) => {
  return (
    <div id='ratings-reviews-module'>
      <h4>Ratings &amp; Reviews</h4>
      <div id='ratings-reviews'>
        <RatingsBreakdown />
        <ReviewList />
      </div>

    </div>
  )
};

export default ReviewsRatings;