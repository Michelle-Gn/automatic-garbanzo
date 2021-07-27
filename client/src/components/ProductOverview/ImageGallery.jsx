import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'


var ImageGallery = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const [selectedThumb, setThumb] = useState(style.photos[0].url)

  useEffect(() => { setThumb(style.photos[0].url) }, [style])

  const photos = style.photos;
  const thumbs = photos.map( photo =>
    <img
      src={photo.thumbnail_url}
      name={photo.url}
      style={{height: '10vh'}}
      onClick={(e) => { setThumb(e.target.name) }}
    />
  )
  return (
    <section>
      <div >
        {thumbs}
      </div>
      <div>
        <img src={selectedThumb} style={{height: '70vh'}} />
      </div>
    </section>
  )
}

export default ImageGallery;