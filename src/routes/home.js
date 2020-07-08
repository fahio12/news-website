var express = require('express')
var router = express.Router()
getNews = require('../helper/fetchNews')

router.get('/', async function (req, res) { 
  console.log(await getNews())
  res.render('home/landing.hbs')
})

module.exports = router
