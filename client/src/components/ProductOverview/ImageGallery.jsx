import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import AddToCart from './AddToCart.jsx'
import ExpandedView from './ExpandedView.jsx'
import DefaultView from './DefaultView.jsx'


var ImageGallery = (props) => {

  const [view, setView] = useState("default")
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const [selectedThumb, setThumb] = useState(style.photos[0].url)
  useEffect(() => { setThumb(style.photos[0].url) }, [style])
  const photos = style.photos;

  return (
    <section id="imageGallery">

      { view === 'default' ?
      <ExpandedView photos={photos} /> :
      <DefaultView photos={photos} setThumb={setThumb} />
       }
      <AddToCart />
    </section>
  )
}

export default ImageGallery;