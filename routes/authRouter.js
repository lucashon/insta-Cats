const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.registePost)
router.post('/login', AuthController.loginPost)



module.exports = router