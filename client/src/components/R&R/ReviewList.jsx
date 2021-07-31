import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Review from './Review.jsx';
import ReviewForm from './ReviewForm.jsx';


const ReviewList = (props) => {
  const reviews = useSelector(state => state.reviews.results) || {}
  console.log(reviews)
  // const [sortBy, setSortBy] = useState('relevant')
  // const productId = useSelector(state => state.getNewProductReducer.selectedProduct.id)
  // const totalRatings = useSelector(state => state.totalRatings) || 5
  // // console.log(productId, '----productId')
  // // console.log(totalRatings, '----totalRatings')

  // const getReviewData = (id, sort, count, dispatch) => {
  //   return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/?product_id=${id}&sort=${sort}&count=${count}`, { headers: {'Authorization': config} })
  //     .then(result => console.log(result)) //dispatch(result.data))
  //     .catch(err => console.log('getReviewData failed: ', err))

  // }

  // useEffect(() => {
  //   if (productId && sortBy) {
  //     getReviewData(productId, sortBy, totalRatings, (data) => {
  //       console.log(data)
  //       //store.dispatch(reviewListActions.changeReviewList(data));
  //     })
  //   }
  // }, [productId, sortBy])

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