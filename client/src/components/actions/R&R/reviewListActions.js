import * as actionTypes from './actionTypes'

export const reviewsListActions = {
  changeReviewList: reviews => ({
    type: actionTypes.CHANGE_REVIEWS,
    reviews
  }),
};