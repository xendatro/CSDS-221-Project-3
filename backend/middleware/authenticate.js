const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authenticate = async (req, res, next) => {
    const {authorization} = req.headers

    if (!authorization) {
        res.status(400).json({
            error: "Authorization token is required."
        })
    }

    const token = authorization.split(" ")[1]

    try {
        const {userId} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({_id: userId}).select("_id")

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: "Request is not authorized."})
    }
}

module.exports = authenticate