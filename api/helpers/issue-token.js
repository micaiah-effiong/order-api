const jwt = require("jsonwebtoken");

module.exports = {


  friendlyName: 'Issue token',


  description: '',


  inputs: {
    payload:{ type:"string" }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO
    return new Promise(function(resolve, reject){
      
      jwt.sign({data: inputs.payload},
        process.env.jwtsec,
        {expiresIn: "14 days"}, function(err, token){
        if (err) return reject("Something went wrong");

        return resolve(token);
      });

    })
  }


};

