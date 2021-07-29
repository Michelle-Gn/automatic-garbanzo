import React from 'react'


const DefaultView = ({photos, setThumb}) => {

  const thumbs = photos.map( photo =>
    <span className="col-2 justify-content-evenly">
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
    <div id="carouselExampleControls" className="carousel slide" data-ride="false" data-bs-wrap="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row justify-content-evenly">
          {thumbs.slice(0, 4)}
          </div>
        </div>
        <div className="carousel-item">
          <div className="row justify-content-evenly">
          {thumbs.slice(4, 20)}
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default DefaultView;