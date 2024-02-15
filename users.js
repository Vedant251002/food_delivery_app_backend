const router = require('express').Router()
const client = require('./config')
router.get('/' , async(req,res) => {
    let {rows} = await client.query('select id,name , role from users where id = $1',[req.query.id])
    res.json(rows)
})

router.get('/restaurant', async(req,res)=> {
    let {rows} = await client.query('select id , name , address , mobileno from restaurants where owner = $1',[req.query.id])
    res.json(rows)
}) 
module.exports = router