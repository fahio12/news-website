const fetch = require('node-fetch');
require('dotenv').config()

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
const API_KEY = process.env.NEWS_API_KEY

async function getNews(){
  response = await fetch(`${API_URL}${API_KEY}`)
  json = await response.json()
  return json
}
module.exports = getNews
