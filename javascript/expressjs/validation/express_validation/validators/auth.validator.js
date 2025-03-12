const { Joi } = require('express-validation')

const loginValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(20)
    })
};

const registerValidation = {
    body: Joi.object({
        username: Joi.string().min(4).max(30).required(),
        email: Joi.string().email().required(),
        age: Joi.number().min(18).max(30).required(),
        // password: Joi.string().min(6).max(20),
        password: Joi.string().regex(/[a-zA-Z0-9]{4,24}/).message('password grather than 4 char').required(),
        confirmPassword: Joi.ref('password')
    })
};

module.exports = {
    loginValidation,
    registerValidation
}
