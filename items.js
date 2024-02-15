const router = require('express').Router()
const client = require('./config')

router.get('/', async(req,res)=> {
    let {rows} = await client.query('select * from items where hotel_id = $1',[req.query.hotel_id])
    res.json(rows)
}) 

router.post('/add',async(req,res) => {
    const { name , category , price , hotel_id } = req.body
    const {rows} = await client.query('insert into items(name , category , price ,hotel_id ) values($1,$2,$3,$4)',[name , category , price , hotel_id])
    res.json({message : 'done'})
})

module.exports = router