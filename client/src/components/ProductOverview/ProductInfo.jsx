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
          </div>
          <div className="col-md-4 display-4 text-center">
            {product.name}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo;