// 01 importar data types
const { DataTypes } = require('sequelize')

// 02 importar arquivo conn
const conn = require('../db/conn')

const Publication = conn.define('Publication',{
    publication:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

})

module.exports = Publication