const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// user registration
const register = async(req, res)=>{
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.email,
            photo: req.body.photo

        })
        await newUser.save()

         res.status(200).json({
            success: true,
            message: 'Successfully Created',
            data: newUser
        })
    } catch (error) {
         res.status(500).json({
            success: false,
            message: 'Failed to Created. Try again',
        })
    }
}

//user login
const login = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {register, login}