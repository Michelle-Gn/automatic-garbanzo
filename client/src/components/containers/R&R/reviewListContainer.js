import {connect} from 'react-redux';
import ReviewList from '../ReviewsRatings/Reviews/ReviewList.jsx';
// import review list actions

const mapStateToProps = state => ({
  // current product
  // reviews
  // ratings metadata
});

const mapDispatchToProps = dispatch => ({
  // handle clicks to see more reviews
  // add more reviews to list
});

const ReviewListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewList);

export default ReviewListContainer