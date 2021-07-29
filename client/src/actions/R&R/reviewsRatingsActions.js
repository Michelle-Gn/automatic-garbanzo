import * as actionTypes from '../actionTypes'

export const reviewsRatingsActions = {
  getMetaData: (meta) => ({
    type: actionTypes.GET_RATINGS,
    ratingsMeta: meta
  }),

  setTotalRatings: (meta) => {
    const totalRatings = Object.values(meta.ratings).reduce((sum, key) => sum + parseFloat(key));
    const ratingSum = 0;
    for (var rating in meta.ratings) {
      const currentRating = meta.ratings[rating] * Number(rating);
      ratingSum += currentRating;
    }

    return {
      type: actionTypes.SET_TOTAL_RATINGS_AND_AVERAGE,
      totalRatings,
      starAverage: ratingSum / totalRatings
    };
  }
};