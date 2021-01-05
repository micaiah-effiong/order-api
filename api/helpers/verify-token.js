const jwt = require("jsonwebtoken");

module.exports = {


  friendlyName: 'Verify token',


  description: '',


  inputs: {
    token: {type:"string"}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({token}) {

    console.log("token>> ", token)
    // TODO
    return new Promise(function(resolve, reject){
    
      jwt.verify(token,
        process.env.jwtsec, function(err, token){
        if (err) return reject("Something went wrong");
        console.log("decoded>> ", token);
        return resolve(token);
      });

    })
  }


};

