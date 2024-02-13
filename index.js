const express = require('express')
const app = express()
const login = require('./login/login.route')
const bodyparser = require('body-parser')
const register = require('./register')
const { ValidationError } = require('express-validation')

app.use(bodyparser.json())
app.use(express.urlencoded({
    extended: false
  }));

  app.use('/login',login)
app.use('/register' , register)

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err.details)
    }
    return res.status(500).json(err)
  })

app.listen(6000)