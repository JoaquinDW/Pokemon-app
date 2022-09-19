const { DataTypes, UUID, UUIDV4, TEXT, INTEGER, BOOLEAN, FLOAT, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id : {
      type: UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    imageCard: {
      type: TEXT,
    },
    imageDetail: {
      type: TEXT,
    },
    height: {
      type: FLOAT,
    },
    weight: {
      type: FLOAT,
    },
    baseExp: {
      type: FLOAT,
    },
    hp: {
      type: FLOAT,
    },
    attack: {
      type: FLOAT,
    },
    defense: {
      type: FLOAT,
    },
    speed: {
      type: FLOAT,
    },
    /*created: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: true
    }*/
  });
};
