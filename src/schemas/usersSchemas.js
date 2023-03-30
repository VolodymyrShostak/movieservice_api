const Joi = require("joi");

const authSchema = Joi.object({
 
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(6).required(),
  
});




module.exports = { authSchema };
