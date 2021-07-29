import React from 'react';
import Container from 'react-bootstrap/Container'
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';


var ProductOverview = (props) => {
  return (
    <Container fluid>
      <ProductInfo />
      <StyleSelector />
      <ImageGallery />
    </Container>
  )
}

export default ProductOverview;