import React from 'react'
import { Carousel, Col, Row} from 'react-bootstrap'
import {useEffect} from 'react'

import AddToCart from './AddToCart.jsx'


const ExpandedView = ({photos, setView, view}) => {

  useEffect(() => {
    // zoom functionality here
  const zoomBoxes = document.querySelectorAll(".zoom-view");
  zoomBoxes.forEach(function (image) {
    var imageCss = window.getComputedStyle(image, false);
    var imageUrl = imageCss.backgroundImage.slice(4, -1).replace(/['"]/g, "");

    var imageSrc = new Image();
    imageSrc.onload = () => {
      var imageWidth = imageSrc.naturalWidth;
      var imageHeight = imageSrc.naturalHeight;
      var ratio = imageHeight / imageWidth;

      var percentage = ratio * 100 + "%";
      image.style.paddingBottom = percentage;

      image.onmousemove = (e) => {
        var boxWidth = image.clientWidth;
        var x = e.pageX;
        var y = e.pageY;
        var xPercent = x / (boxWidth / 100) + "%";
        var yPercent = y / ((boxWidth * ratio) / 100) + "%";
        Object.assign(image.style, {
          cursor: 'zoom-out',
          backgroundPosition: xPercent + " " + yPercent,
          backgroundSize: imageWidth + "px"
        });
      };
       image.onmouseleave = (e) => {
        //  console.log("mouse left")
          Object.assign(image.style, {
            backgroundPosition: "center",
            backgroundSize: "cover",
          });
        }
      }
      imageSrc.src = imageUrl;
    })
  })


  // Create Carousel-Items here.
  const photoElems = photos.map( (photo, index) =>
  <Carousel.Item className="justify-content-center">
    <Col xs={12} className="justify-content-center ">
      <div className="image-container" style={{'text-align': 'center'}}>
        <div
          className="image zoom-view"
          style={{
            backgroundImage: `url(${photo.url})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            cursor: 'zoom-out',
            display: 'block',
            maxWidth: '100%',
            paddingBottom: '10em',
            width: '100em',}}
            onClick={() => {setView('default')}} >
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
