const app = require('express')()
const login = require('./login')
const bodyparser = require('body-parser')
const register = require('./register')
app.use(bodyparser.json())

app.use('/login',login)
app.use('/register' , register)

app.listen(6000)