'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
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

    grade : {
      type: DataTypes.STRING(10),
      allowNull:false,
      refrence: {
        model:"grades",
        key:"id"
      }


      
    },
 
  }, {
    indexes: [
      // add a FULLTEXT index
      { type: 'FULLTEXT', name: 'fname', fields: ['fname', 'lname'] }
    ],
  });
  
  Client.associate = function(models) {
  };

  return Client;
};