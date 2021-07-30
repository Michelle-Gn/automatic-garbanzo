import React from 'react';

const RatingBar = ({starNum, starRating, totalRatings}) => {
  const percentage = (starRating / totalRatings) * 100;

  const outerBar = {height: 20, width: '75%', backgroundColor: 'grey'};
  const innerBar = {height: 20, width: `${percentage}%`, backgroundColor: 'green'};

  return (
    <div id='bar'>
      <p>{starNum} stars </p>
      <div id='outer-bar' style={outerBar}>
        <div id='inner-bar' style={innerBar}></div>
      </div>
    </div>
  )
};

export default RatingBar;