'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(10)
    },
    fname: {
      type: DataTypes.STRING(20),
      allowNull:false
    },
    lname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull:false
    },
   
    nationalCode: {
      type: DataTypes.STRING(10),
      allowNull:false
    },
  }, {
  });
  
  user.associate = function() {
  };
  return user;
};