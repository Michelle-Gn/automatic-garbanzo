import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarRating from './StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicBar from './CharacteristicBar.jsx';


const RatingsBreakdown = (props) => {
  const starAverage = useSelector(state => state.starAverage.starAverage)

  return (
    <div id='breakdown'>
      <h1>:: ratings breakdown ::</h1>
      <span id='starAverage'>
        {/* productId is filler */}
        <StarRating productId='16058' starCount={starAverage} />
      </span>
      <div id='rating-bars'>
        <RatingBar />
      </div>
      <div id='characteristics'>
        <CharacteristicBar />
      </div>
    </div>
  )
};

export default RatingsBreakdown;