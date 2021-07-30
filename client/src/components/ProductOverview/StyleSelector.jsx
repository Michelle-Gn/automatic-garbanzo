import React, { useEffect } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles, UpdateSelectedStyle } from '../../actions/ProductOverview/actions.js'

var StyleSelector = (props) => {
  const styles = useSelector(state => state.updateStyleReducer.styleList)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)
  useEffect(()=>{
    dispatch(getNewStyles(product.id))
  }, [])

  const dispatch = useDispatch()
  const thumbs = styles.map(style => {
    let thumb = style.photos[0].thumbnail_url
    return (
      <Col sm={1}>
        <Image
          key={style.style_id}
          name={style.style_id}
          src={thumb}
          alt="aThumb"
          style={{ height: '10vh', margin: 'auto'}}
          onClick={(e) => {
            dispatch(UpdateSelectedStyle(e.target.name))
          }}
          thumbnail
          />
        </Col>
    )
  })
  return (
    <Row className="justify-content-center">
      {thumbs}
    </Row>
  )
}

export default StyleSelector;