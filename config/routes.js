/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // order
  "GET /order": {action:"order/fetch"},
  "POST /order": {action:"order/create"},
  "PUT /order": {action:"order/update"},

  // user
    "POST /login": {action:"user/login"},
    "POST /register": {action:"user/create"},

};
