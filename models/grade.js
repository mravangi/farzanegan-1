'use strict';
module.exports = (sequelize, DataTypes) => {
  const grade = sequelize.define('grade', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(10)
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull:false
    },
    
  }, {
  });
  
  return grade;
};