/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// postgresql-trapezoidal-31748
module.exports = {

  attributes: {

    item:{
      type: "string",
      columnName: "items"
    },
    
    orderId:{
      type: "string",
      columnName: "order_id"
    },
    
    quantity:{
      type: "number",
      columnName: "qty"
    },
    
    orderTotal:{
      type: "number",
      columnName: "order_amount"
    }

  },

};

