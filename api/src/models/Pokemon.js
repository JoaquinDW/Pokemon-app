const { DataTypes, UUID, UUIDV4, TEXT, INTEGER, BOOLEAN } = require('sequelize');
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageCard: {
      type: TEXT,
      allowNull: false
    },
    imageDetail: {
      type: TEXT,
      allowNull: false
    },
    height: {
      type: INTEGER,
      allowNull: false
    },
    weight: {
      type: INTEGER,
      allowNull: false
    },
    baseExp: {
      type: INTEGER,
      allowNull: true
    },
    hp: {
      type: INTEGER,
      allowNull: true
    },
    attack: {
      type: INTEGER,
      allowNull: true
    },
    defense: {
      type: INTEGER,
      allowNull: true
    },
    speed: {
      type: INTEGER,
      allowNull: true
    },
    created: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
