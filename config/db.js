// config/db.js
const { Sequelize } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('notification', 'root', '', {
  host: '10.2.6.80',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
