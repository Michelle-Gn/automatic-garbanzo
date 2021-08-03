import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'

const SubmitStarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              hidden
              type='radio'
              name='star-rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className='star'
              size={60}
              color={ratingValue <= (hover || rating) ? '#000000' : '#E4E5E9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default SubmitStarRating;