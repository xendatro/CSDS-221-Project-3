const express = require('express')
const Send = require('../models/sendModel')
const mongoose = require('mongoose')

const getReceives = async (req, res) => {
    const userId = req.user._id

    const sends = await Send.find({toUserId: userId}).sort({createdAt: -1})

    res.status(200).json(sends)
} 

const getReceive = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such message.'})
    }

    
  const message = await Send.findById(id)

  if (!message) {
    return res.status(404).json({error: 'No such message.'})
  }

  res.status(200).json(message)
}


module.exports = {getReceives, getReceive}