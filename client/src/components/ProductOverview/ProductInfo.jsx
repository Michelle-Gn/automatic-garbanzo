import React from 'react';
import { useSelector } from 'react-redux';

var ProductInfo = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  // Need a use selector to get product info.
  // How to do
  return (
    <section id="productInfo">
      <div> Catagory </div>
      <div> Description </div>
      <div>Style : {style.name}</div>
      <div> Price : {style.sale_price ? style.sale_price : style.original_price}</div>

    </section>
  )
}

export default ProductInfo;