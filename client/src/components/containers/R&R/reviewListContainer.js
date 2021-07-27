import {connect} from 'react-redux';
import ReviewList from '../ReviewsRatings/Reviews/ReviewList.jsx';
import reviewListActions from '../../actions/R&R/reviewListActions.js';

const mapStateToProps = state => ({
  // current product
  // reviews
  // ratings metadata
});

const mapDispatchToProps = dispatch => ({
  // handle clicks to see more reviews
  // add more reviews to list
  addReviews: reviews => {
    dispatch(reviewListActions.changeReviewList(reviews));
  }
});

const ReviewListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewList);

export default ReviewListContainer