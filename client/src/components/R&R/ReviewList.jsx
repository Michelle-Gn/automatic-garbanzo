import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Review from './Review.jsx';
import ReviewForm from './ReviewForm.jsx';
import axios from 'axios';
import config from '../../../../config.js';
import store from '../../store'
import reviewListActions from '../../actions/R&R/reviewListActions.js';

const ReviewList = (props) => {
  const reviews = useSelector(state => state.reviews.results) || {}
  console.log(reviews)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  const getReviewData = (id, dispatch) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=${id}`, { headers: {'Authorization': config} })
      .then(result => dispatch(result.data))
      .catch(err => console.log('getReviewData failed: ', err))
  }

  useEffect(() => {
    if (product.id) {
      getReviewData(product.id, (data) => {
        store.dispatch(reviewListActions.changeReviewList(data));
      })
    }
  }, [product])

  return (
    <div id='review-list'>
      <button>ADD DROPDOWN MENU</button>
      {Object.keys(reviews).map((review, i) => (
        <Review key={i} reviewData={review} />
      ))}
      <button>ADD VISIBLE REVIEWS</button>
      <button>ADD NEW REVIEW (ReviewForm component)</button>
    </div>
  )
};

export default ReviewList;