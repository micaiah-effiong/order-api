module.exports = {


  friendlyName: 'Fetch',


  description: 'Fetch order.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    const data = await Order.find()
    return {data};

  }


};
