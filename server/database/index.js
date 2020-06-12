//this file brings all sequelize instance together
const db = require('./database');
const Candies = require('./candies');
const User = require('./user');

// add associations here

module.exports = {
  // Include all models in this exports object
  db,
  Candies,
  User,
};
