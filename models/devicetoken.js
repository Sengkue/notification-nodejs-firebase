'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeviceToken = sequelize.define('DeviceToken', {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {});
  return DeviceToken;
};
