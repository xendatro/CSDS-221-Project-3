const express = require('express')
const protect = require('../middleware/authenticate')
const {getReceive, getReceives} = require('../controllers/receiveController')

const router = express.Router()

router.use(protect)
    

router.get('/', getReceives)

router.get('/:id', getReceive)

module.exports = router