import React from 'react'


const DefaultView = ({photos, setThumb}) => {

  const thumbs = photos.map( photo =>
    <span>
      <img
        className=""
        src={photo.thumbnail_url}
        key={photo.url}
        name={photo.url}
        style={{height: '10vh'}}
        onClick={(e) => { setThumb(e.target.name) }}
      />
    </span>
  )

  return (
    <div>
      Default Carousel Here.
    </div>
  )
}

export default DefaultView;