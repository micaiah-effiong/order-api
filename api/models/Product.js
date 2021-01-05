/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    productId:{
      type: "string",
      columnName: "product_d"
    },

    price:{
      type: "number",
      columnName: "price_per_item"
    },

    description:{
      type: "string",
      columnName: "description"
    },

  },

};

