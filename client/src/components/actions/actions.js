import * as actionTypes from './actionTypes'

// Product Overview Action Creators // Maybe combine these like Ratings and Reviews Actions?

export const addToCart = (SKU, QTY, SIZE) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      SKU: SKU,
      QTY: QTY,
      SIZE: SIZE
    }
  }
};

export const UpdateSelectedStyle = (selectedId) => {
  return {
    type: actionTypes.UPDATE_SELECTED_STYLE,
    payload: {
      style_id: Number(selectedId)
    }
  }
};


// Ratings and Reviews Action Creators

export const reviewsRatingsActions = {
  getMetaData: meta => ({
    type: actionTypes.GET_RATINGS,
    ratingsMeta: meta
  }),

  setTotalRatings: meta => {
    const totalRatings = Object.values(meta.ratings).reduce((sum, key) => sum + parseFloat(key));
    const ratingSum = 0;
    for (var rating in meta.ratings) {
      const currentRating = meta.ratings[rating] * Number(rating);
      ratingSum += currentRating;
    }

    return {
      type: actionTypes.SET_TOTAL_RATINGS_AND_AVERAGE,
      starAverage: ratingSum / totalRatings
    };
  }
};
