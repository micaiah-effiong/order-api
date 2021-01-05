module.exports = {

  friendlyName: 'Update',

  description: 'Update order.',

  inputs: {
    item:{
      type: "string"
    },
    description:{
      type: "string"
    },
    quantity:{
      type: "number"
    },
    price:{
      type: "number"
    },
  },

  exits: {

  },


  fn: async function (inputs) {
    const item = await Order.findOne({
      orderId: this.req.params()
    })

    //TODO: Error handling

    const data = await item.update(inputs);
    // All done.
    return exits.success({message: 'Order updated.', data});

  }


};
