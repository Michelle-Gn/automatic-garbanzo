import { connect } from 'react-redux';
import ReviewsRatings from '../ReviewsRatings/reviewsRatingsContainer';
import { reviewsRatingsActions } from '../actions/actions';

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

// I can't resolve what is trying to be below here. From the way it is structured, it looks like it is trying to reference itself, but I suspect I messed up some of your pathing. ;(
// I also noticed that you said the ReviewRatings was not in theis branch. I'll just commit and push this working version, and hit you up when we discuss the pull.

// Either way, this branch is working when I comment out this top level component from App.jsx.
// We should be good to work on this structure more collaboratively.

const ReviewsRatingsContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsRatings);

export default ReviewsRatingsContainer;