const router = require('express').Router()
const client = require('./config')

router.post('/', async(req,res)=>{
    let {name , password } = req.body
    let {rows}  = await client.query('select * from users where name = $1 and password = $2',[name , password])
    res.json(rows)
})
module.exports = router