// 01 importar data types
const { DataTypes } = require('sequelize')

// 02 importar arquivo conn
const conn = require('../db/conn')
const User = require('../models/User')
const Publication = require('../models/Publication')

const Like = conn.define('like',{
    id:{
        type: DataTypes.STRING,
        require: true,
        primaryKey: true
    },

})

User.belongsToMany(Publication,{through: 'likes'})
Publication.belongsToMany(User,{through: 'likes'})

module.exports = Like