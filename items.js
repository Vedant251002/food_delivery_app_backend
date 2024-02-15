const router = require('express').Router()
const client = require('./config')

router.get('/', async(req,res)=> {
    let {rows} = await client.query('select * from items where hotel_id = $1',[req.query.hotel_id])
    res.json(rows)
}) 

router.post('/add',async(req,res) => {
    const { name , category , price , hotel_id } = req.body
    const {rows} = await client.query('insert into items(name , category , price ,hotel_id ) values($1,$2,$3,$4) returning id',[name , category , price , hotel_id])
    const response = await client.query('select * from items where id = $1' ,[rows[0].id])
    res.json(response.rows)
})

module.exports = router