module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    firstname: { type: 'string' },

    lastname: { type: 'string' },

    email: { type: 'string' },

    password: { type: 'string' }
  },


  exits: {

  },


  fn: async function ({firstname, lastname, email, password}, exits) {
    const newUser = await User.create({firstname, lastname, email, password}).fetch();
    
    // All done.
    this.res.status(201)
    return this.res.json({data: newUser});

  }


};
