/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require("bcrypt")

module.exports = {

  attributes: {

    firstname: { type: 'string', required: true },

    lastname: { type: 'string', required: true },

    email: { type: 'string', required: true, unique: true },

    password: { type: 'string', required: true },

    salt: { type: 'string' },
    
    hash: { type: 'string' }

  },

  beforeCreate: async function(input, next){
    
    // generate salt and has password
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(input.password, salt);

    // assign new values
    input.hash = hash;
    input.salt = salt;
    input.password = '';
    
    // move to next lifecycle method
    return next();
  },

  customToJSON: function(){
    return _.omit(this, ["password", "hash", "salt"])
  },

  verifyPassword: async function(password, hash){
    const status = await bcrypt.compare(password, hash);

    if (!status) {return Error("Wrong email or password");}

    return status;
  }

};

