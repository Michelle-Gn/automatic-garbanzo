import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles } from '../../actions/ProductOverview/actions.js'
import { Container, Row, Col } from 'react-bootstrap'

var ProductInfo = (props) => {
  const style = useSelector(state => state.updateStyleReducer.selectedStyle)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)

  return (
      <Row className="justify-content-between" >
        <Col className="align-items-end" sm={3}>
            <span>Review Stars</span>
            <a href="#">See all Reviews</a>
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