import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import ExpandedView from './ExpandedView.jsx'
import DefaultView from './DefaultView.jsx'


var ImageGallery = (props) => {

  const [view, setView] = useState("default")
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)

  const photos = style.photos;

  return (
    <section id="imageGallery">

      { view === 'default' ?
      <DefaultView  photos={photos} style={style} setView={setView} /> :
      <ExpandedView photos={photos} setView={setView} view={view} />
       }
    </section>
  )
}

export default ImageGallery;