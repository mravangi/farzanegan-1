'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(10)
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull:false
    }
  }, {
  });
  
  Client.associate = function(models) {
  };

  return Client;
};