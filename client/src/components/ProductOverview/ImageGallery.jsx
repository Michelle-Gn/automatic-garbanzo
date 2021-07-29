import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'


var ImageGallery = (props) => {

  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const [selectedThumb, setThumb] = useState(style.photos[0].url)
  useEffect(() => { setThumb(style.photos[0].url) }, [style])
  const photos = style.photos;
  const thumbs = photos.map( photo =>
    <img
      className="flex-col"
      src={photo.thumbnail_url}
      key={photo.url}
      name={photo.url}
      style={{height: '10vh'}}
      onClick={(e) => { setThumb(e.target.name) }}
    />
  )

  return (
    <section id="imageGallery">
      <div id="galleryThumbs" className="flex-col flex-center" >
        {thumbs}
      </div>
      <div id="mainViewContainer" >
        <img  src={selectedThumb}  />
      </div>
    </section>
  )
}

export default ImageGallery;