const Joi = req("joi");

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().req(),
    password: Joi.string().min(6).req()
})

const studentAuth = Joi.object ({
    firstName: Joi.string().pattern(/^[A-Za-z]+$/).min(1).req().messages({'pattern':'Username must only contain letters'}),
    lastName: Joi.string().pattern(/^[a-zA-Z$]+$/).min(1).req(),
    gender: Joi.string().min(4).pattern(/^[a-zA-Z]+$/).req()
})

module.exports = { authSchema, studentAuth }