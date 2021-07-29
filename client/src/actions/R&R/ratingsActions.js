import * as actionTypes from '../actionTypes'

const updateTotalRatings = ({total, sum}) => {
  return {
    type: actionTypes.SET_TOTAL_RATINGS_AND_AVERAGE,
    totalRatings: total,
    starAverage: sum / total
  };
}

const ratingsActions = {
  getRatingsMeta: (meta) => ({
    type: actionTypes.GET_RATINGS,
    ratingsMeta: meta
  }),

  setTotalRatings: (meta) => {
    return (dispatch) => {
      const totalRatings = Object.values(meta.ratings).reduce((sum, key) => sum + parseFloat(key));
      const ratingSum = 0;
      for (var rating in meta.ratings) {
        const currentRating = meta.ratings[rating] * Number(rating);
        ratingSum += currentRating;
      }
      dispatch(updateTotalRatings({totalRatings, ratingSum}))
    }
  }
};

export default ratingsActions;