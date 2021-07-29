import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewStyles, UpdateSelectedStyle } from '../../actions/ProductOverview/actions.js'

var StyleSelector = (props) => {
  const styles = useSelector(state => state.updateStyleReducer.styleList)
  const product = useSelector(state => state.getNewProductReducer.selectedProduct)
  useEffect(()=>{
    dispatch(getNewStyles(product.id))
  }, [product])

  const dispatch = useDispatch()
  const thumbs = styles.map(style => {
    let thumb = style.photos[0].thumbnail_url
    return (
        <img
          key={style.style_id}
          name={style.style_id}
          src={thumb}
          alt="aThumb"
          style={{ height: '100%', padding: '5px'}}
          onClick={(e) => {
            dispatch(UpdateSelectedStyle(e.target.name))
          }}
          />
    )
  })
  return (
    <section
      id="styleSelector"
      style={{height: '15vh'}}>
      {thumbs}
    </section>
  )
}

export default StyleSelector;