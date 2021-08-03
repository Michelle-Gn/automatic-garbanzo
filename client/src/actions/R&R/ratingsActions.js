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
    const totalRatings = Object.values(meta.ratings).reduce((a, b) => Number(a) + Number(b));
    let ratingSum = 0;
    for (let rating in meta.ratings) {
      const currentRating = Number(meta.ratings[rating]) * Number(rating);
      ratingSum += currentRating;
    }
    return {
      type: actionTypes.SET_TOTAL_RATINGS_AND_AVERAGE,
      totalRatings,
      starAverage: ratingSum / totalRatings
    };
  }
};

export default ratingsActions;