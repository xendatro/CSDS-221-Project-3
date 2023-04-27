const express = require('express')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const home = async (req, res) => {
    res.json("Home")
}

const login = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.login(username, password)

        const token = createJWT(user._id)

        res.status(200).json({
            username, token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
        return
    }
}

const register = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.register(username, password)

        const token = createJWT(user._id)

        res.status(200).json({
            username, token
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
        return
    }
}

const createJWT = (userId) => {
    return jwt.sign({userId}, process.env.SECRET, {expiresIn: "3d"})
} 

module.exports = {home, login, register}