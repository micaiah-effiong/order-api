module.exports = {


  friendlyName: 'Create',


  description: 'Create new order.',


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


  fn: async function (
    {
      item,
      description,
      quantity,
      price
    },
    exits) {

    // create id label
    const idLabel = (item[0]+item[item.length-1]).toUpperCase();
    
    // create order
    const newOrder = await Order.create({
      item,
      description,
      quantity,
      price,
      orderTotal: quantity*price,
      orderId: `${Date.now()}-${idLabel}`
    }).fetch();

    // All done.
    this.res.status(201);
    return this.res.json({message: 'Order created.', data: newOrder});
  }
};
