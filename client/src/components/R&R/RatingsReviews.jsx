import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import config from '../../../../config.js';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import ratingsActions from '../../actions/R&R/ratingsActions.js';


const ReviewsRatings = (props) => {
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  const dispatch = useDispatch()

  // ATTEMPT 1
  // useEffect(() => {
  //   axios.get(`${config.URL}reviews/meta/?product_id=${product.id}`, {
  //     headers: {'Authorization': config.TOKEN}
  //   })
  //     .then(response => handleRatingsUpdate(response.data))
  //     .catch(err => console.log('Error GET ratingsMeta', err));
  // }, [])

  // ATTEMPT 2
  // const getMetaData = (id, dispatch) => {
  //   return axios.get(`${config.URL}reviews/meta/?product_id=${id}`, { headers: {'Authorization': config.TOKEN} })
  //     .then(result => dispatch(result.data))
  //     .catch(err => console.log('getMetaData failed: ', err))
  // }

  // useEffect(() => {
  //   getMetaData('16058', (data) => (data) => handleRatingsUpdate)
  // }, [])

  // ATTEMPT 3
  // async function fetchData() {
  //   let response = await axios.get(`${config.URL}reviews/meta/?product_id=${product.id}`, {
  //     headers: {'Authorization': config.TOKEN}
  //   });
  //   let results = await response.data;
  //   handleRatingsUpdate(results);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleRatingsUpdate = (ratings) => {
    dispatch(reviewsRatingsActions.getRatingsMeta(ratings));
    dispatch(reviewsRatingsActions.setTotalRatings(ratings));
  }

  // ADD HANDLER FOR CHANGES IN PRODUCT ID

  return (
    <div id='ratings-reviews-module'>
      <h4>Ratings &amp; Reviews</h4>
      <div id='ratings-reviews'>
        <div>
          <RatingsBreakdown />
        </div>
        <div>
          <ReviewList />
        </div>
      </div>

    </div>
  )
};

export default ReviewsRatings;