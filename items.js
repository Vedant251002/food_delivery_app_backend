const router = require('express').Router()
const client = require('./config')

router.get('/', async(req,res)=> {
    let {rows} = await client.query('select * from items where hotel_id = $1',[req.query.hotel_id])
    res.json(rows)
}) 

router.post('/',async(req,res) => {
    const { name , category , price , hotel_id } = req.body
    const {rows} = await client.query('insert into items(name , category , price ,hotel_id ) values($1,$2,$3,$4) returning id',[name , category , price , hotel_id])
    const response = await client.query('select * from items where id = $1' ,[rows[0].id])
    res.json(response.rows)
})

router.put('/:id' , async (req,res) => {
    let item = req.body
    const {rows} = await client.query('update items set name = $1 and category = $2 and price = $3 where id = $4',[item.name , item.category , item.price ,req.params.id])
    res.json({message : 'done'})
})

router.delete('/:id' , async (req,res) => {
    const {rows} = await client.query('delete from items where id = $1',[req.params.id])
    res.json({message : 'done'})
})

module.exports = router