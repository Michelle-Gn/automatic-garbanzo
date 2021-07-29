import React from 'react'


const DefaultView = ({photos, setThumb}) => {

  // Create Carousel-Items here.
  const photoElems = photos.map( (photo, index) =>
    <div >
      <div >
      <img
        src={photo.url}
        key={photo.url}
        name={photo.url}
        onClick={(e) => { console.log("Expanded Image Clicked") }}
      />
      </div>
    </div>
  )
  // create Carousel indicators
  const photoInds = photos.map((photo, index) =>
    <li data-target="#defaultCarousel" data-slide-to={String(index)}></li>
  )

  return (
    <div>

    </div>

  )
}

export default DefaultView;
