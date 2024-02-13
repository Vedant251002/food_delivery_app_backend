const router = require('express').Router()
const controller = require('./login.controller')
const {validate} = require('express-validation')
const validatation = require('./login.validation')

router.post('/', validate(validatation.login) ,controller.getUser)

module.exports = router