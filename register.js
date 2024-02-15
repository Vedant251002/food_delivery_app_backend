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
        mobileno : Joi.string().required().max(10),
        role : Joi.string().required().valid('admin','customer'),
    })
}

router.post('/' , validate(validateUser),async(req,res) => {
    let {name , password , role } = req.body
    let {rows} = await client.query('insert into users(name,password,role)values($1,$2,$3) returning id',[name ,password , role])
    let {res_name , address , mobileno} = req.body
    let data = await client.query('insert into restaurants(name,address,mobileno,owner)values($1,$2,$3,$4)',[res_name,address,mobileno,rows[0].id])
    res.json({message : 'done'})
})

module.exports = router