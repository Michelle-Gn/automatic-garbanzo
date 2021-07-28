import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles } from '../../actions/ProductOverview/actions.js'

var ProductInfo = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  return (
    <section id="productInfo">
      <div className="flex-row flex-split">
        <div className="flex-col flex-left">
          <div id="reviewbar">Review Placeholder</div>
          <div>Style : {style.name}</div>
          <div> Price : {style.sale_price ? style.sale_price : style.original_price}</div>
        </div>
        <div> {product.slogan}</div>
        <div className="flex-col flex-right">
          <div> {product.category}</div>
          <div> {product.name}</div>
        </div>
      </div>
      <br/>
      <div style={{'textAlign' : 'center'}}> {product.description}</div>
      <br/>

    </section>
  )
}

export default ProductInfo;