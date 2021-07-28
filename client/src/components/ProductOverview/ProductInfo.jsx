import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles } from '../../actions/ProductOverview/actions.js'

var ProductInfo = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  return (
    <section id="productInfo">
      <div className="">
        <div className="row">
          <div id="reviewbar" className="col-md-4">
            <span>Review Stars</span>
            <a href="#">See all Reviews</a>
            <div>{product.slogan}</div>
          </div>
          <div className="col-md-4 display-5 text-center">
            {product.name}
          </div>
          <div className="col-md-3 text-end" >
            <div>{style.name}</div>
            <div>{style.sale_price ? style.sale_price : style.original_price}</div>
            <div> {product.category}</div>
          </div>
        <div className="row">
          <div className="col-md-12 text-center"> {product.description}</div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProductInfo;