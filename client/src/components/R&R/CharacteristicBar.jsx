import React from 'react';

const CharacteristicBar = ({characteristic, charRating}) => {
  const outerBar = {height: 20, width: '20%', backgroundColor: 'white'};
  const innerBar = {height: '100%', width: `${charRating * 13}%`, display: 'inline-block'};

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
    midKey = '';
    highKey = 'Perfect';
  case 'Quality':
    lowKey = 'Poor';
    midKey = '';
    highKey = 'Perfect';
  case 'Length':
    lowKey = 'Runs short';
    midKey = 'Perfect';
    highKey = 'Runs long';
  case 'Fit':
    lowKey = 'Too tight';
    midKey = 'Perfect';
    highKey = 'Too big';
  }

  return (
    <div id='characteristic-bar' key={characteristic}>
      <p>{characteristic}</p>
      <div id='outer-bar-char' style={outerBar}>
        <div style={innerBar}></div>
        <span id='triangle-pointer'>&#9660;</span>
      </div>
      <p id='low-char' className='meaning'>
        {lowKey}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {midKey}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {highKey}
      </p>
      {/* <p id='mid-char' className='meaning'>{midKey}</p>
      <p id='high-char' className='meaning'>{highKey}</p> */}
    </div>
  )
};

export default CharacteristicBar;