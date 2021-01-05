module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: { type: 'string' },
    password: { type: 'string' }
  },


  exits: {

  },


  fn: async function ({email, password}, exits) {
    const user = await User.findOne({email});

    if(!user){
      this.res.status(400);
      return {message: "Invalid email or password"}
    };

    const token = await sails.helpers.issueToken(user.email);

    // All done.
    return exits.success({user, token});

  }


};
