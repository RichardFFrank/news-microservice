const router = require("express").Router();
const axios = require('axios');
require("dotenv").config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;

function today() {
    let curr = new Date();
    let dd = String(curr.getDate()).padStart(2,'0');
    let mm = String(curr.getMonth()+1).padStart(2,'0');
    let yyyy = curr.getFullYear();

    curr = mm+'/'+dd+'/'+yyyy;
    return curr;
}

function buildNewsQuery(keyword) {
    let baseURL = 'https://newsapi.org/v2/everything?'
    let query = 'q='+keyword+'&';
    let todaysDate = today();
    let from = 'from='+todaysDate+'&';
    let sortBy = 'popularity&'
    let apiKey = 'apiKey='+NEWS_API_KEY;
    let finalQuery = baseURL+query+from+sortBy+apiKey;
    return finalQuery
}

router.route('/:keyword').get((request, res) => {
    finalQuery = buildNewsQuery(request.params.keyword);
    axios.get(finalQuery)
        .then(response => {
            console.log(response);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    console.log(`/ works and this: ${finalQuery}`);
    

})

module.exports = router;