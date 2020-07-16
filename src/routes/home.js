var express = require('express')
var router = express.Router()
getNews = require('../helper/fetchNews')

router.get('/', async function (req, res) {
  jsonNews = await getNews()
  console.log(jsonNews)
  // for(var i = 0;i<jsonNews.length;i++){
  //   console.log(jsonNews[i])
  // }
  res.render('home/landing.hbs',{jsonNews})
})

module.exports = router
