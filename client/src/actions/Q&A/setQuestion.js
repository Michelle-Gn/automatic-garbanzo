import * as actionTypes from '../actionTypes';

export default (dispatch, question_id) => {
  dispatch({
    type: actionTypes.SET_QUESTION_ID,
    payload: question_id
  })
}