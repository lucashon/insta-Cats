// 01 importar data types
const { DataTypes } = require('sequelize')

// 02 importar arquivo conn
const conn = require('../db/conn')
const User = require('../models/User')
const Publication = require('../models/Publication')

const Comments = conn.define('comments',{
    Comments:{
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },

})

User.belongsToMany(Publication,{through: 'comments'})
Publication.belongsToMany(User,{through: 'comments'})

module.exports = Comments