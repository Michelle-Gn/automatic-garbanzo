import React, { useEffect } from 'react'
import { Carousel, Col, Row} from 'react-bootstrap'
import InnerImageZoom from 'react-inner-image-zoom'

import AddToCart from './AddToCart.jsx'

var ExpandedView = ({photos, setView}) => {

  // Create Carousel-Items here.
  const photoElems = photos.map( (photo, index) =>
  <Carousel.Item className="justify-content-center">
    <Col xs={12} className="justify-content-center ">

      <div className="image-container" style={{'text-align': 'center'}}>
        <div
          style={{
            cursor: 'zoom-out',
            display: 'block',
            maxWidth: '100%',
            width: '90em',}}
            onClick={() => {setView('default')}} >
          <InnerImageZoom
            src={photo.url}
            zoomSrc={photo.url}
            zoomType="hover"
            zoomScale={2}/>
        </div>
      </div>
    </Col>
  </Carousel.Item>
  )


  return (
    <div>
      <Carousel wrap={false} interval={null}>
        {photoElems}
      </Carousel>
      <Row xs={'12'}>
        <AddToCart style={{
          backgroundColor: 'red'
        }}/>
      </Row>
    </div>
  )
}

export default ExpandedView;
