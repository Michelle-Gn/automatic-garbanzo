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

  const [sortBy, setSortBy] = useState('relevant')
  const [reviewCount, setReviewCount] = useState(2)
  const [buttonText, setButtonText] = useState('MORE REVIEWS')

  const getReviewData = (id, sortBy, count, dispatch) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=${id}&count=${count}&sort=${sortBy}`, { headers: {'Authorization': config} })
      .then(result => dispatch(result.data))
      .catch(err => console.log('getReviewData failed: ', err));
  }

  useEffect(() => {
    if (product.id) {
      getReviewData(product.id, sortBy, totalRatings, (data) => {
        store.dispatch(reviewListActions.changeReviewList(data));
      })
    }
  }, [product, sortBy, totalRatings])

  useEffect(() => {
    if (reviews.length <= 2) {
      setButtonText('');
    } else if (reviewCount === reviews.length) {
      setButtonText('COLLAPSE REVIEWS');
    } else {
      setButtonText('MORE REVIEWS');
    }
  }, [reviewCount])

  const handleClick = () => {
    if (reviewCount === reviews.length) {
      setReviewCount(2);
    } else {
      setReviewCount(reviewCount + 2);
    }
  }

  const handleAllClick =() => {
    setReviewCount(reviews.length);
  }

  return (
    <div id='review-list'>
      <div id='review-dropdown'>
        <h6 id='dropdown-text'>{reviews.length} reviews, sorted by&#160;</h6>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option key='relevant' value='relevant'>relevance</option>
          <option key='helpful' value='helpful'>helpful</option>
          <option key='newest' value='newest'>newest</option>
        </select>
      </div>
      <div id='list-reviews-scroll'>
        {
          Object.values(reviews).slice(0, reviewCount).map((review, i) => (
            <Review key={i} reviewData={review} />
          ))
        }
      </div>
      <button className='review-list-buttons' onClick={handleClick}>{buttonText}</button>
      <br/>
      <button onClick={handleAllClick}>SHOW ALL REVIEWS</button>
      <br/>
      <ReviewForm />
    </div>
  )
};

export default ReviewList;