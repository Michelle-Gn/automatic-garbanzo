import * as actionTypes from '../actionTypes'

const reviewListActions = {
  changeReviewList: (reviews) => ({
    type: actionTypes.CHANGE_REVIEWS,
    reviews
  }),

  addVisibleReviews: (reviews) => ({
    type: actionTypes.ADD_VISIBLE_REVIEWS,
    visibleReviews: reviews
  })
};

export default reviewListActions;