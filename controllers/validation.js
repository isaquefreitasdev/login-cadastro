const Joi = require('@hapi/joi')

const registerValidate = (data) => {
    const schema = Joi.object({
      nome: Joi.string().required().min(4).max(60),
      sobrenome: Joi.string().required().min(4).max(60),
      email: Joi.string().required().min(4).max(60),
      senha: Joi.string().required().min(4).max(60)
    });
    return schema.validate(data);
  };
  
  const loginValidate = (data) => {
    const schema = Joi.object({
      email: Joi.string().required().min(4).max(60),
      senha: Joi.string().required().min(4).max(60)
    });
    return schema.validate(data);
  };
  


const validation = {
    registerValidate,
    loginValidate
}
module.exports = validation