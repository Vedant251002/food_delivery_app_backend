const {Joi} = require('express-validation');

module.exports = {
    login : {
        body : Joi.object({
            name : Joi.string().required().min(3),
            password : Joi.string().required().min(5)
        })
    }
}