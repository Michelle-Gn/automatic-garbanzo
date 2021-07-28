import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateSelectedStyle } from '../../actions/actions.js'

var StyleSelector = (props) => {
  const styles = useSelector(state => state.updateStyleReducer.styleList)
  const dispatch = useDispatch()
  const thumbs = styles.map(style => {
    let thumb = style.photos[0].thumbnail_url
    return (
      <img
        key={style.style_id}
        name={style.style_id}
        src={thumb}
        alt="aThumb"
        style={{height: '5vh'}}
        onClick={(e) => {
          dispatch(UpdateSelectedStyle(e.target.name))
        }}
        />
    )
  })
  return (
    <section id="styleSelector">
      {thumbs}
    </section>
  )
}

export default StyleSelector;