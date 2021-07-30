import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import config from '../../../../config.js';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import ratingsActions from '../../actions/R&R/ratingsActions.js';
import store from '../../store'


const ReviewsRatings = (props) => {
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  const getMetaData = (id, dispatch) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta/?product_id=${id}`, { headers: {'Authorization': config} })
      .then(result => dispatch(result.data))
      .catch(err => console.log('getMetaData failed: ', err))
  }
  useEffect(() => {
    if (product.id) {
      getMetaData(product.id, (data) => {
        store.dispatch(ratingsActions.getRatingsMeta(data));
        store.dispatch(ratingsActions.setTotalRatings(data));
      })
    }
  }, [product])

  // ADD HANDLER FOR CHANGES IN PRODUCT ID

  return (
    <div id='ratings-reviews-module'>
      <h4>Ratings &amp; Reviews</h4>
      <div id='ratings-reviews'>
        <div>
          <RatingsBreakdown />
        </div>
        <div>
          {/* <ReviewList /> */}
        </div>
      </div>

    </div>
  )
};

export default ReviewsRatings;