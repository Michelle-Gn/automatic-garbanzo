import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';


var ProductOverview = (props) => {
  return (
    <div >
      <ProductInfo />
      <StyleSelector />
      <ImageGallery />
    </div>
  )
}

export default ProductOverview;