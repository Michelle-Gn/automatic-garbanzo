import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarRating from './StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicBar from './CharacteristicBar.jsx';


const RatingsBreakdown = (props) => {
  const starAverage = useSelector(state => state.starAverage)
  const ratings = useSelector(state => state.ratingsMeta.ratings)
  const totalRatings = useSelector(state => state.totalRatings)
  const characteristics = useSelector(state => state.ratingsMeta.characteristics) || {}

  let ratingsDist = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  if (ratings) {
    ratingsDist = Object.assign(ratingsDist, ratings);
  }

  return (
    <div id='breakdown'>
      {/* AVERAGE RATING (NUMERIC AND STARS) */}
      <span id='starAverage'>
        <p id='numeric-avg'>{Number(starAverage).toFixed(1)}</p>
        <div id='breakdown-stars'><StarRating starCount={starAverage} /></div>
      </span>

      {/* BAR GRAPHS OF RATINGS */}
      <div id='rating-bars'>
        {
          Object.keys(ratingsDist).map((star, i) => (
            <RatingBar key={`${star}: ${i}`} starNum={star} starRating={ratingsDist[star]} totalRatings={totalRatings} />
            ))
          }
      </div>

      {/* GRAPHS FOR CHARACTERISTICS */}
      <div id='characteristics'>
        {
          Object.keys(characteristics).map((type, i) => (
            <CharacteristicBar key={`${type}: ${i}`} characteristic={type} charRating={characteristics[type].value} />
          ))
        }
      </div>
    </div>
  )
};

export default RatingsBreakdown;


