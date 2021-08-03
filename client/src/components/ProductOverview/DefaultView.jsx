import React, {useState, useEffect} from 'react'
import {Row, Col, Carousel, Image} from 'react-bootstrap'

import AddToCart from './AddToCart.jsx'


const DefaultView = ({photos, style, setView}) => {

  const [selectedThumb, setThumb] = useState(style.photos[0].url)
  useEffect(() => {
    setThumb(style.photos[0].url)
  }, [style])

  const thumbs = photos.map( photo =>
    <Col xs={'3'} className="align-content-center">
      <Image
        className="img-thumbnail"
        src={photo.thumbnail_url}
        key={photo.url}
        name={photo.url}
        style={{height: '10vh'}}
        onClick={(e) => { setThumb(e.target.name) }}
        />
    </Col>
  )

  return (
    <div >
      <Carousel wrap={false} interval={null}>
        <Carousel.Item >
          <Row xs={'12'} style={{textAlign: 'center'}} className="justify-content-evenly">
          {thumbs.slice(0,4)}
          </Row>
        </Carousel.Item>
        <Carousel.Item >
          <Row xs={'12'} style={{textAlign: 'center'}} className="justify-content-evenly" >
            {thumbs.slice(4,8)}
          </Row>
        </Carousel.Item>
      </Carousel>
      <Row>
        <Col xs={'8'} style={{textAlign: 'center'}}>
        <div
          src ={selectedThumb}
          style={{
            height:'60vh',
            backgroundImage: `url(${selectedThumb})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            cursor: 'zoom-in',
            display: 'block',
            maxWidth: '100%',
            paddingBottom: '10em',
            width: '100em'
            }}
          onClick={()=>{ setView('expanded') }} >
        </div>
        </Col>
        <Col xs={'4'}>
          <AddToCart />
        </Col>
      </Row>
    </div>
  )
}

export default DefaultView;