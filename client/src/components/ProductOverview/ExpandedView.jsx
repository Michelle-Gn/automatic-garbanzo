import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'


const DefaultView = ({photos, setThumb}) => {

  // Create Carousel-Items here.
  const photoElems = photos.map( (photo, index) =>
  <Carousel.Item className="justify-content-center">
    <Col xs={12} className="justify-content-center ">
      <div style={{'text-align': 'center'}}>
      <img
        src={photo.url}
        key={photo.url}
        name={photo.url}
        style={{height: '70vh', margin: 'auto'}}
        onClick={(e) => { console.log("Expanded Image Clicked") }}
      />
      </div>
    </Col>
  </Carousel.Item>
  )

  return (
      <Carousel wrap={false} interval={null}>
        {photoElems}
      </Carousel>
  )
}

export default DefaultView;
