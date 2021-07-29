import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import AddToCart from './AddToCart.jsx'
import ThumbCar from './ThumbCarousel.jsx'


var ImageGallery = (props) => {

  const [view, setView] = useState("default")
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const [selectedThumb, setThumb] = useState(style.photos[0].url)
  useEffect(() => { setThumb(style.photos[0].url) }, [style])
  const photos = style.photos;

  return (
    <section id="imageGallery" className="row justify-content-between">
      <ThumbCar photos={photos} setThumb={setThumb}/>
      <div id="mainViewContainer" className="col-md-8 overflow-hidden justify-content-center" >
        <img  src={selectedThumb} style={{height: '60vh'}} />
      </div>
      <AddToCart />
    </section>
  )
}

export default ImageGallery;