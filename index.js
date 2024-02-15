const express = require('express')
const app = express()
const login = require('./login/login.route')
const bodyparser = require('body-parser')
const register = require('./register')
const users = require('./users')
const { ValidationError } = require('express-validation')
const cors = require('cors')
const items = require('./items')
app.use(cors({origin : 'http://localhost:3000'}))
app.use(bodyparser.json())
app.use(express.urlencoded({
    extended: false
  }));

  app.use('/login',login)
app.use('/register' , register)
app.use('/user' , users)
app.use('/item',items)
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err.details)
    }
    return res.status(500).json(err)
  })

app.listen(3030)