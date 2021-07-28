import React, {useEffect, useState} from 'react';
import Review from './Review.jsx';
// import {getReviews} from '../../../../../helpers/getReviews.js';

const ReviewList = (props) => {
  // declare current product ID
  const productId = props.currentProduct.id;
  // useState for modal (writing new reviews)
  // useState for sort
  const [sortBy, setSortBy] = useState('relevant');

  // if product ID changes
  // useEffect for getting reviews (with helper)
  useEffect(() => {
    const count = 5 // change to totalRatings from reducer eventually
    getReviews(productId, sortBy, count, props.addReviews);
  }, [productId, sortBy]);

  // handle "more reviews" click
    // ????

  // handle "add review" click
    // useState for modal

  // return
    // dropdown menu
      // option relevant
      // option helpful
      // option newest
    // add review button (write review form component)
    // review component (map)
    return (
      <div id='review-list'>
        <div id='review-dropdown'>sorted by
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option key='relevant' value='relevant'>Relevant</option>
            <option key='helpful' value='helpful'>Helpful</option>
            <option key='newest' value='newest'>Newest</option>
          </select>
        </div>
        <div id='inner-review-list'>
          {/* add reviews by mapping */}
        </div>
      </div>
    )
};

export default ReviewList;