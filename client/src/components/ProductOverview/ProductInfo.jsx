import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles } from '../../actions/ProductOverview/actions.js'
import { Container, Row, Col } from 'react-bootstrap'
import StarRating from '../R&R/StarRating.jsx'

var ProductInfo = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)
  const starAverage = useSelector(state => state.starAverage)

  return (
      <Row className="justify-content-between" >
        <Col className="align-items-end" sm={3}>
          <span>
            <StarRating starCount={starAverage}/>
            <a href="#ratings-reviews-module">See all Reviews</a>
          </span>
        </Col>
        <Col sm={6} style={{textAlign: 'end'}} >
          <span >
            {product.name}
          </span>
        </Col>
      </Row>
  )
}

export default ProductInfo;