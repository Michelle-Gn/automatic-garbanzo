import React from 'react';
import Review from './Review.jsx';
import ReviewForm from './ReviewForm.jsx';

const ReviewList = (props) => {
  return (
    <div id='review-list'>
      <h1>:: reviews list ::</h1>
      <button>ADD DROPDOWN MENU</button>
      <Review />
      <button>ADD VISIBLE REVIEWS</button>
      <button>ADD NEW REVIEW (ReviewForm component)</button>
    </div>
  )
};

export default ReviewList;