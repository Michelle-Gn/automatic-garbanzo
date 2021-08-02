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
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)
  const totalRatings = useSelector(state => state.totalRatings) || 5
  const visibleReviews = useSelector(state => state.visibleReviews.results)
  const [sortBy, setSortBy] = useState('relevant')

  const getReviewData = (id, sortBy, count, dispatch) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=${id}&count=${count}&sort=${sortBy}`, { headers: {'Authorization': config} })
      .then(result => dispatch(result.data))
      .catch(err => console.log('getReviewData failed: ', err))
  }

  useEffect(() => {
    if (product.id) {
      getReviewData(product.id, sortBy, totalRatings, (data) => {
        console.log(data)
        store.dispatch(reviewListActions.changeReviewList(data));
        store.dispatch(reviewListActions.addVisibleReviews(data));
      })
    }
  }, [product, sortBy, totalRatings])

  // const handleMoreClick = (post) => {
  //   let display = totalRatings
  //   if (post) {
  //     console.log('handling more click');
  //     display++;
  //   }
  //   if (post || reviews.length <= totalRatings) {
  //     getReviewData(product.id, sortBy, display, reviewListActions.changeReviewList, () => {});
  //   }

  //   const currentPosition = Math.max(visibleReviews.length || 0);
  //   const reviewsToAdd = visibleReviews.concat(reviews.slice(
  //     currentPosition,
  //     currentPosition + 2
  //   ));
  //   reviewListActions.addVisibleReviews(reviewsToAdd);
  // }

  return (
    <div id='review-list'>
      <div id='review-dropdown'>
        <h6>{totalRatings.length} reviews, sorted by</h6>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option key='relevant' value='relevant'>relevance</option>
          <option key='helpful' value='helpful'>helpful</option>
          <option key='newest' value='newest'>newest</option>
        </select>
      </div>
      {Object.keys(reviews).map((review, i) => (
        <Review key={i} reviewData={review} />
      ))}
      <button>ADD VISIBLE REVIEWS</button>
      <button>ADD NEW REVIEW (ReviewForm component)</button>
    </div>
  )
};

export default ReviewList;