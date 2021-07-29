import * as actionTypes from '../actionTypes'

export const reviewsRatingsActions = {
  changeReviewList = (reviews) => ({
    type: actionTypes.CHANGE_REVIEWS,
    reviews
  }),

  addVisibleReviews = (reviews) => ({
    type: actionTypes.ADD_VISIBLE_REVIEWS,
    addVisibleReviews: reviews
  })
};