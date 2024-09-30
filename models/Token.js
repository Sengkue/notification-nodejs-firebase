// models/Token.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define Token model
const Token = sequelize.define('Token', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
});

module.exports = Token;
