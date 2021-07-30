import * as actionTypes from '../actionTypes.js'
import axios from 'axios'
var API_KEY = require('../../../../config.js')

// console.log('api_key', API_KEY.TOKEN)

export default (dispatch, product_id) => {

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=${product_id}`
  const options = {
    headers: {'Authorization': API_KEY.TOKEN}
  }
  axios.get(url, options).then(res => {
    dispatch({
      type: actionTypes.GET_QUESTIONS,
      payload: res.data.results
    })
  })
  .catch(err => console.log(err))
}