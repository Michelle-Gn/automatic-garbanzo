import React, { useState, useEffect } from 'react';
import config from '../../../../config.js'

const StarRating = ({productId, starCount}) => {
  const [starAverage, setStarAverage] = useState(0);

  const stars = [];
  const starFull = productId ? parseInt(starAverage) : parseInt(starCount);
  const starDecimal = productId ? starAverage % 1 : starCount % 1

  // GET average stars
  const getRatingsAverage = (id) => {
    axios.get(`${config.URL}meta/?product_id=${id}`)
      .then(result => {
        const ratings = result.data.ratings;
        let total = 0;
        let avg = 0;

        for (let k in ratings) {
          total += ratings[k];
          avg += (Number(k) * ratings[k]);
        }
        return avg / total;
      })
      .catch(err => console.log('getRatingsAverage failed', err))
  }

  if (productId) {
    getRatingsAverage(productId)
      .then(average => setStarAverage(average))
      .catch(err => console.log('Failed to get average rating', err));
  }

  // Count full stars
  for (let i = 0; i < 5; i++) {
    if (i < starFull) { stars[i] = <span key={i}>&#9733;</span>; }
    else { stars[i] = <span key={i}>&#9734;</span>; };
  }

  // Count partial stars
  if (starDecimal > 0 && starDecimal < 0.26) {
    stars[starFull] =
      <div id='quarter' key='quarter' style={{position:'relative', display:'inline-flex', width:'15px'}}>
        <span style={{position:'relative', display:'flex', zIndex:0}}>&#9734;</span>
        <span style={{width:'45%', position:'absolute', display:'flex', zIndex:1, overflow:'hidden'}}>&#9733;</span>
      </div>
  } else if (starDecimal > 0.25 && starDecimal < 0.75) {
    stars[starFull] =
      <div id='half' key='half' style={{position:'relative', display:'inline-flex', width:'15px'}}>
        <span style={{position:'relative', display:'flex', zIndex:0}}>&#9734;</span>
        <span style={{width:'55%', position:'absolute', display:'flex', zIndex:1, overflow:'hidden'}}>&#9733;</span>
      </div>
  } else if (starDecimal > 0.74) {
    stars[starFull] =
      <div id='threefourth' key='threefourth' style={{position:'relative', display:'inline-flex', width:'15px'}}>
        <span style={{position:'relative', display:'flex', zIndex:0}}>&#9734;</span>
        <span style={{width:'60%', position:'absolute', display:'flex', zIndex:1, overflow:'hidden'}}>&#9733;</span>
      </div>
  }

  return (
    <div id='star-rating-filled'>{stars}</div>
  )
};

export default StarRating;