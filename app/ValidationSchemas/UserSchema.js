const Joi = require('joi');

const LoginSchema = Joi.object().keys({
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required()
});

const RegisterSchema = Joi.object().keys({
	name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  repeat_password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

module.exports = {
	login: LoginSchema,
	register: RegisterSchema
};
