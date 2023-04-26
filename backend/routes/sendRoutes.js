const express = require('express')
const protect = require('../middleware/authenticate')
const {getSends, createSend} = require('../controllers/sendController')

const router = express.Router()

router.use(protect)

router.get('/', getSends)

router.post('/', createSend)

module.exports = router