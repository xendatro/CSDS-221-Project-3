const express = require('express')
const {home, login, register} = require('../controllers/userController')
const router = express.Router()
const protect = require('../middleware/authenticate')

router.get('/', protect, home)
router.post('/login', login)
router.post('/register', register)

module.exports = router