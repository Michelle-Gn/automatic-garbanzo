import React from 'react';

const CharacteristicBar = ({characteristic, charRating}) => {
  const outerBar = {height: 2, width: '100%', backgroundColor: 'gray'};
  const innerBar = {height: '10%', width: `${(charRating / 5 ) * 100}%`, display: 'inline-block'};

  let highKey, midKey, lowKey;

  switch (characteristic) {
  case 'Size':
    lowKey = 'Too small';
    midKey = 'Perfect';
    highKey = 'Too big';
  case 'Width':
    lowKey = 'Too narrow';
    midKey = 'Perfect';
    highKey = 'Too wide';
  case 'Comfort':
    lowKey = 'Poor';
    midKey = 'Average';
    highKey = 'Perfect';
  case 'Quality':
    lowKey = 'Poor';
    midKey = 'Average';
    highKey = 'Perfect';
  case 'Length':
    lowKey = 'Runs short';
    midKey = 'Perfect';
    highKey = 'Runs long';
  case 'Fit':
    lowKey = 'Runs tight';
    midKey = 'Perfect';
    highKey = 'Runs big';
  }

  return (
    <div id='characteristic-bar' key={characteristic}>
      <strong>{characteristic}</strong>
      <div className='char-meanings'>
        <p className='char-meaning' id='low-char'>{lowKey}</p>
        <p className='char-meaning' id='mid-char'>{midKey}</p>
        <p className='char-meaning' id='high-char'>{highKey}</p>
      </div>
      <div id='outer-bar-char' style={outerBar}>
        <div style={innerBar}></div>
        <span id='triangle-pointer'>&#9650;</span>
      </div>
    </div>
  )
};

export default CharacteristicBar;