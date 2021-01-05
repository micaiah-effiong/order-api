const jwt = require("jsonwebtoken");

module.exports = async(req, res, next) =>{
  let token;

  if (req.headers && req.headers.token){
    token = req.headers.token
  }else if(req.header("authorization")){
    token = req.header("authorization").split('Bearer ')[1];
  } else{
    return res.status(401).json({msg: "Not Authorization  header was found"});
  }

  const status = await sails.helpers.verifyToken(token);

  if (!status) return res.status(401).json({msg: "Token not valid"});

  return next();
}