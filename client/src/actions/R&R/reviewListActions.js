import * as actionTypes from '../actionTypes'

const reviewListActions = {
  changeReviewList: (reviews) => ({
    type: actionTypes.CHANGE_REVIEWS,
    reviews
  }),
};

export default reviewListActions;