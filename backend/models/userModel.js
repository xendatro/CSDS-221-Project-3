const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
})

userSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw Error("Please enter all fields.")
    }

    const user = await this.findOne({username})

    if (!user) {
        throw Error("Username does not exist.")
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Password is incorrect for user.")
    }

    return user
}

userSchema.statics.register = async function(username, password) {

    if (!username || !password) {
        throw Error("Please enter all fields.")
    }

    const exists = await this.findOne({username})

    if (exists) {
        throw Error("Username already exists.")

    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await this.create({username, password: hashedPassword})
    
    return user
}

module.exports = mongoose.model("User", userSchema)