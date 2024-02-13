const model = require('./login.model')


const getUser = async(req,res) => {
    let {name , password } = req.body
    let {rows} = await model.getUserFromDB(name , password )
    if(rows.length > 0 ){
        return res.json(rows)
    }else{
        res.json({message : 'no rows found'})
    }
}

module.exports = {
    getUser
}