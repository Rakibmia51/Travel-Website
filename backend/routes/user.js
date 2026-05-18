const express = require('express')
const { createUser, updateUser, deleteUser, getSingleUser, getAllUser } = require('../controllers/userController')

const router = express.Router()

// Create new tour
router.post('/', createUser)

//Update User
router.put('/:id', updateUser)

//Delete User
router.delete('/:id', deleteUser)

//get single User
router.get('/:id', getSingleUser)

//get all User
router.get('/', getAllUser)




module.exports = router