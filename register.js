const router = require('express').Router()
const Joi = require('joi')
const client = require('./config')
const { validate } = require('express-validation')

const validateUser = {
    body : Joi.object({
        name : Joi.string().required(),
        password : Joi.string().required(),
        res_name : Joi.string().required(),
        address : Joi.string().required(),
        mobileno : Joi.number().required().max(10)
    })
}

router.post('/' , validate(validateUser),async(req,res) => {
    let {name , password } = req.body
    let {rows} = await client.query('insert into users(name,password)values($1,$2)',[name ,password])
    let {res_name , address , mobileno} = req.body
    let data = await client.query('insert into restaurants(name,address,mobileno)values($1,$2,$3)',[res_name,address,mobileno])
    res.json({message : 'done'})
})

module.exports = router