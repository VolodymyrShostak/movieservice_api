const { authSchema } = require("../schemas/usersSchemas");

module.exports = {
  
  autorisationsValidation: (req, res, next) => { 
     if (!Object.keys(req.body).length) {
       return res.status(400).json({
         message: "User fields are not filled. All fields are required",
       });
    }
     const { error } = authSchema.validate(req.body);
    if (error) {
       console.log(error);
       return res
         .status(400)
         .json({ status: "error", code: 400, message: error.message });
     }
     next();
  }

};
