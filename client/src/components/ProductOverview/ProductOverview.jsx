import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx'

var ProductOverview = (props) => {
  return (
    <div class="jumbotron">
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
      <ImageGallery />
    </div>
  )
}

export default ProductOverview;