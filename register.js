const router = require('express').Router()
const client = require('./config')

router.post('/',async(req,res) => {
    let {name , password } = req.body
    let {rows} = await client.query('insert into users(name,password)values($1,$2)',[name ,password])
    let {res_name , address , mobileno} = req.body
    let data = await client.query('insert into restaurants(name,address,mobileno)values($1,$2,$3)',[res_name,address,mobileno])
    res.json({message : 'done'})
})

module.exports = router