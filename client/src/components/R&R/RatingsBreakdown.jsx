import React from 'react';
import StarRating from './StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicBar from './CharacteristicBar.jsx';

const RatingsBreakdown = (props) => {
  return (
    <div id='breakdown'>
      <h1>:: ratings breakdown ::</h1>
      <span id='starAverage'>
        <StarRating />
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