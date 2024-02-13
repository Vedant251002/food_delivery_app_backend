const router = require('express').Router()
const client = require('./config')
router.get('/' , async(req,res) => {
    let {rows} = await client.query('select * from users where id = $1',[req.query.id])
    res.json(rows)
})

module.exports = router