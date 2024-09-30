// config/db.js
const { Sequelize } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('notification', 'root', '', {
  host: 'nod',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
