import * as actionTypes from '../actionTypes';
import axios from 'axios';
import API_KEY from '../../../../config';

export default (answer_id) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/answers/${answer_id}/report`
  const options = {
    headers: {'Authorization': API_KEY}
  }
  return axios.put(url, null, options)
}