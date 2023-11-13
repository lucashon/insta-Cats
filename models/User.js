// 01 importar data types
const { DataTypes } = require('sequelize')

// 02 importar arquivo conn
const conn = require('../db/conn')

const User = conn.define('USer',{
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
})

module.exports = User