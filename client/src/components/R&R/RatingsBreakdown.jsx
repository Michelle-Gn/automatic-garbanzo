import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarRating from './StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicBar from './CharacteristicBar.jsx';


const RatingsBreakdown = (props) => {
  const starAverage = useSelector(state => state.starAverage.starAverage)

  return (
    <div id='breakdown'>
      {/* AVERAGE RATING (NUMERIC AND STARS) */}
      <span id='starAverage'>
        {starAverage.toFixed(1)}
        {/* productId is filler */}
        <StarRating productId='16058' starCount={starAverage} />
      </span>

      {/* BAR GRAPHS OF RATINGS */}
      <div id='rating-bars'>
        <RatingBar />
      </div>

      {/* GRAPHS FOR CHARACTERISTICS */}
      <div id='characteristics'>
        <CharacteristicBar />
      </div>
    </div>
  )
};

export default RatingsBreakdown;