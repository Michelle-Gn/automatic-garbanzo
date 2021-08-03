import React from 'react';
import StarRating from './StarRating.jsx';
import Helpful from './Helpful.jsx';
import moment from 'moment';

const Review = (props) => {
  const reviewData = props.reviewData
  const date = reviewData.date
  const formattedDate = moment(date).format('MMMM D, YYYY');

  return (
    <div id='review'>
      <StarRating id='stars' starCount={reviewData.rating} />
      <span id='user-date'>
        <p id='username-date' key='username-date'>{reviewData['reviewer_name']}, {formattedDate}</p>
      </span>
      <h3>{reviewData.summary}</h3>
      <p>{reviewData.body}</p>
      {
        !reviewData.recommend ? null :
        <p><span className='checkmark'>&#10003;</span> I recommend this product</p>
      }
      {
        !reviewData.response ? null :
        <div id='response' key='response'>
          <strong>Response:</strong>
          <p>{reviewData.response}</p>
        </div>
      }
      <Helpful helpfulness={reviewData.helpfulness} reviewId={reviewData['review_id']} />
    </div>
  )
};

export default Review;