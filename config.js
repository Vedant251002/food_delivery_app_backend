const { Client} = require('pg')

const client = new Client({
    user : 'postgres',
    host : '192.168.10.105',
    database : 'food_delivery',
    password : 'avesta',
    port : 5432,
})
client.connect()
module.exports = {
    query : async(query , params) => {
        return await client.query(query , params)
    }
}