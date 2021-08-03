import * as actionTypes from '../actionTypes';

export default (dispatch, shown) => {
  dispatch({
    type: actionTypes.TOGGLE_MODAL,
    payload: !shown
  })
}