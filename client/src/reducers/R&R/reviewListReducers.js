import Redux from 'redux';
import * as actionTypes from '../../actions/actionTypes'

const initialState = {
  reviews: [
    {
        "review_id": 348307,
        "rating": 5,
        "summary": "So Fetch!",
        "recommend": true,
        "response": null,
        "body": "OMG Karen! Just because someone is from Africa you can't just ask somebody if they're white.",
        "date": "2021-04-28T00:00:00.000Z",
        "reviewer_name": "Gretchen Weiners",
        "helpfulness": 2,
        "photos": []
    },
    {
        "review_id": 407022,
        "rating": 5,
        "summary": "this was great",
        "recommend": true,
        "response": null,
        "body": "I am testing a post request for a review. I need to type something to have the 50 character minimum met, so I can see if this post request registers",
        "date": "2021-06-16T00:00:00.000Z",
        "reviewer_name": "defaultuser32",
        "helpfulness": 0,
        "photos": []
    },
    {
        "review_id": 407020,
        "rating": 5,
        "summary": "this was great",
        "recommend": true,
        "response": null,
        "body": "I am testing a post request for a review. I need to type something to have the 50 character minimum met, so I can see if this post request registers",
        "date": "2021-06-16T00:00:00.000Z",
        "reviewer_name": "defaultuser32",
        "helpfulness": 0,
        "photos": []
    },
    {
        "review_id": 407019,
        "rating": 5,
        "summary": "this was great",
        "recommend": true,
        "response": null,
        "body": "I am testing a post request for a review. I need to type something to have the 50 character minimum met, so I can see if this post request registers",
        "date": "2021-06-16T00:00:00.000Z",
        "reviewer_name": "defaultuser32",
        "helpfulness": 0,
        "photos": []
    },
    {
        "review_id": 348342,
        "rating": 5,
        "summary": "These look spiffy",
        "recommend": true,
        "response": null,
        "body": "Writing a very interesting post here to post so I need to test the working environment",
        "date": "2021-04-28T00:00:00.000Z",
        "reviewer_name": "Karen",
        "helpfulness": 0,
        "photos": []
    }
  ],
  visibleReviews: []
};

const reviewListReducers = {
  reviewListReducer: (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.CHANGE_REVIEWS:
      return action.reviews;
    default:
      return state;
    }
  },

  addReviewsReducer: (state = initialState, action) => {
    switch(action.type) {
    case actionTypes.ADD_VISIBLE_REVIEWS:
      return visibleReviews;
    default:
      return state;
    }
  }
};

export default reviewListReducers;