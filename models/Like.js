// 01 importar data types
const { DataTypes } = require('sequelize')

// 02 importar arquivo conn
const conn = require('../db/conn')

const User = require('../models/User')
const Publication = require('../models/Publication')

const Like = conn.define('like',{})

User.belongsToMany(Publication,{through: 'like'})
Publication.belongsToMany(User,{through: 'like'})

module.exports = Like