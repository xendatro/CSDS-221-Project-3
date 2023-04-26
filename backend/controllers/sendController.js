const express = require('express')
const User = require('../models/userModel')
const Send = require('../models/sendModel')

const getSends = async (req, res) => {
    const userId = req.user._id

    const sends = await Send.find({fromUserId: userId}).sort({createdAt: -1})

    res.status(200).json(sends)
} 

const createSend = async (req, res) => {
    const {to, subject, body} = req.body

    if (!to || !subject || !body) {
        res.status(400).json({
            error: "Please fill in all fields."
        })
    }

    const recipient = await User.findOne({username: to})

    if (!recipient) {
        res.status(400).json({
            error: "Invalid recipient."
        })
    }

    try {
        const userId = req.user._id
        const fromUser = await User.findById(userId)
        const fromUsername = fromUser.username
        const toUsername = recipient.username
        const send = await Send.create({
            fromUserId: userId,
            toUserId: recipient._id,
            fromUsername,
            toUsername,
            subject,
            body
        })
        res.status(200).json(send)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


module.exports = {getSends, createSend}