const Sequelize = require('sequelize');
const db = require('./database');
const crypto = require('crypto');
const _ = require('lodash');

const User = db.define(
  'users',
  {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    salt: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      beforeCreate: setSaltAndPassword,
      beforeUpdate: setSaltAndPassword,
    },
  }
);

// instance method
User.prototype.correctPassword = (candidatePassword) => {
  // returns true/false if userName &  pass matches
  return (
    this.Model.encryptPassword(candidatePassword, this.salt) === this.password
  );
};

User.prototype.sanitize = function () {
  return _.omit(this.toJSON(), ['password', 'salt']);
};

// class methods
// generates random salt
User.generateSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

// accepts a plain text password and a salt, and returns its hash
User.encryptPassword = (plainText, salt) => {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
};

// we need to salt and hash again when the user enters their password for the first time and do it again whenever they change it
function setSaltAndPassword(user) {
  if (user.changed('password'));
  user.salt = User.generateSalt();
  user.password = User.encryptPassword(user.password, user.salt);
}

module.exports = User;
