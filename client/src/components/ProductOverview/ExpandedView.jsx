import React from 'react'


const DefaultView = ({photos, setThumb}) => {

  // Create Carousel-Items here.
  const photoElems = photos.map( (photo, index) =>
    <div
    className={index === 0 ? "carousel-item active" : "carousel-item"}
    >
      <div className={"col-12 justify-content-end"}>
      <img
        className="d-block mx-auto"
        src={photo.url}
        key={photo.url}
        name={photo.url}
        style={{height:'70vh'}}
        onClick={(e) => { console.log("Expanded Image Clicked") }}
      />
      </div>
    </div>
  )
  // create Carousel indicators
  const photoInds = photos.map((photo, index) =>
    <li data-target="#defaultCarousel" data-slide-to={String(index)} className={index === 0 ? "active": " "}></li>
  )

  return (
    <div>

    </div>

  )
}

export default DefaultView;
