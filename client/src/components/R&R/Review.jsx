import React from 'react';
import StarRating from './StarRating.jsx'

const Review = (props) => {
  const reviewData = props.reviewData
  const date = reviewData.date
  const formattedDate = null // FIND HUMAN READABLE TIME CONVERTER

  return (
    <div id='review'>
      <StarRating id='stars' starCount={reviewData.rating} />
      <span id='user-date'>
        <p id='username' key='username'>{reviewData['reviewer_name']}</p>
        <p id='date' key='date'>{date}</p>
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
    </div>
  )
};

export default Review;