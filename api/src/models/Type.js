const { DataTypes, UUID, UUIDV4, TEXT, } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    //Defino el modelo
    sequelize.define('type', {
        id: {
            type: UUID,
            allowNull: false,  
            primaryKey: true,
            defaultValue: UUIDV4
        },
        name: {
            type: TEXT,
            allowNull: false
        }
    })
}