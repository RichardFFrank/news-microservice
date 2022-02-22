const router = require("express").Router();
const { response } = require('express');

router.route('/').get((request, response) => {
    console.log("/ works ")
    response.send("you got it.");
})

module.exports = router;