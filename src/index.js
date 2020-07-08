const express = require('express')
const app = express()

// TEMPLATE ENGINE
const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials/'
}));
app.use(express.static('public'))

// ROUTES
var home = require("./routes/home")
app.use('/',home)


// Start Server
app.listen(process.env.PORT || 80, function () {
  console.log("Server started")
})
