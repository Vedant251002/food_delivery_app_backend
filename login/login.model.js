const client = require('../config')


const getUserFromDB = async( name , password) => {
    return await client.query('select * from users where name = $1 and password = $2',[name , password])
}

module.exports = {
    getUserFromDB
}