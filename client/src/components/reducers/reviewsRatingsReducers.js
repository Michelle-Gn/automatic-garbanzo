import Redux from 'redux';

const reviewsRatingsReducers = {
  ratingsReducer: (state = {}, action) => {
    switch (action.type) {
    case 'GET_RATINGS':
      return action.ratingsMeta;
    default:
      return state;
    }
  },
  totalRatingsReducer: () => {},
  starAverageReducer: () => {}
};

export default reviewsRatingsReducers;

// import Redux from 'redux';

// var videoListReducer = (state = [], action) => {
//   switch (action.type) {
//   case 'CHANGE_VIDEO_LIST':
//     return action.videos;
//   default:
//     return state;
//   }
// };

// export default videoListReducer;