import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles } from '../actions/actions.js'

var ProductInfo = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  return (
    <section id="productInfo" className="flex-row">

      <div> Catagory {product.category}</div>
      <div> Name {product.name}</div>
      <div> Slogan {product.slogan}</div>
      <div> Description {product.description}</div>
      <div>Style : {style.name}</div>
      <div> Price : {style.sale_price ? style.sale_price : style.original_price}</div>
    </section>
  )
}

export default ProductInfo;