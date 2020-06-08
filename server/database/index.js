//this file brings all sequelize instance together
const db = require('./database');
const Candies = require('./candies');

// add associations here

module.exports = {
  // Include all models in this exports object
  db,
  Candies,
};
