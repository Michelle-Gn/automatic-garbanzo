import {connect} from 'react-redux';
import ReviewsRatings from '../../components/ReviewsRatings/ReviewsRatings.jsx'; // NOT IN THIS BRANCH
import reviewsRatingsActions from '../actions/reviewsRatingsActions.js';

const mapStateToProps = state => ({
  // current product
  // ratings metadata
  // total ratings
  // star average
});

const mapDispatchToProps = dispatch => ({
  handleRatingsUpdate: ratings => {
    dispatch(reviewsRatingsActions.getMetaData(ratings));
    dispatch(reviewsRatingsActions.setTotalRatings(ratings));
  }
});

const ReviewsRatingsContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsRatings);

export default ReviewsRatingsContainer;