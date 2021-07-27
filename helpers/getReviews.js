const axios = require('axios');
const config = require('./config.js');

module.exports.getReviews = (productId, sortBy, count, addReviews) => {
  axios.get(`${config.URL}?product_id=${productId}&sort=${sortBy}&count=${count}`, {
    headers: {
      'Authorization': config.TOKEN
    }
  })
    .then(results => addReviews(results.data.results))
    .catch(err => console.log(err));
};