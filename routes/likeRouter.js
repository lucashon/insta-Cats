const express = require('express')
const router = express.Router()

const LikeController = require('../controllers/LikeController')

router.post('/like', LikeController.likePost)

module.exports = router