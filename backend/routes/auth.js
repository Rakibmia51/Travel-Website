const express = require('express')
const { register, login } = require('../controllers/authController')


const router = express.Router()

//Create new tour
router.post('/register', register)

//Login
router.post('/login', login)






module.exports = router