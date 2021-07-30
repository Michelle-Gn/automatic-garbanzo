import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarRating from './StarRating.jsx';
import RatingBar from './RatingBar.jsx';
import CharacteristicBar from './CharacteristicBar.jsx';


const RatingsBreakdown = (props) => {
  const starAverage = useSelector(state => state.starAverage.starAverage)
  const ratings = useSelector(state => state.ratingsMeta.ratings)
  const totalRatings = useSelector(state => state.totalRatings)

  let ratingsDist = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  if (ratings) {
    ratingsDist = Object.assign({}, ratingsDist, ratings);
  }


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
        {
          Object.keys(ratingsDist).map((star, i) => (
            <RatingBar key={`${star}: ${i}`} starNum={star} starRating={ratingsDist[star]} setTotalRatings={totalRatings} />
          ))
        }
      </div>

      {/* GRAPHS FOR CHARACTERISTICS */}
      <div id='characteristics'>
        <CharacteristicBar />
      </div>
    </div>
  )
};

export default RatingsBreakdown;