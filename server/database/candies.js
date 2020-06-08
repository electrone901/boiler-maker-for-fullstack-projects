const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('candies', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.DOUBLE,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
});
