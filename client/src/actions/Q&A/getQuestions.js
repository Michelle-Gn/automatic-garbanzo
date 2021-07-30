import * as actionTypes from '../actionTypes.js'
import axios from 'axios'

const API_KEY = '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';

export default (dispatch, product_id) => {

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${product_id}`
  const options = {
    headers: {'Authorization': API_KEY}
  }
  axios.get(url, options).then(res => {
    dispatch({
      type: actionTypes.GET_QUESTIONS,
      payload: res.data.results
    })
  })
  .catch(err => console.log(err))
}