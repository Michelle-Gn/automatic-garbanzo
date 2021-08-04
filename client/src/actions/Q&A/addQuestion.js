import * as actionTypes from '../actionTypes.js'
import axios from 'axios'
import API_KEY from '../../../../config.js'

export default (product_id, body, name, email) => {
  const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions"
  const options = {
    headers: {'Authorization': API_KEY}
  }
  return axios.post(url, {body: body, name: name, email: email, product_id: product_id}, options)
}