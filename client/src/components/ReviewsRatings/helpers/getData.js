const axios = require('axios');
const config = require('./config.js');

module.exports.getReviews = (productId, sortBy, count) => {
  axios.get(`${config.URL}?product_id=${productId}&sort=${sortBy}&count=${count}`)
    // need to populate list with dispatch
    .then(results => console.log(results))
    .cath(err => console.log(err));
};