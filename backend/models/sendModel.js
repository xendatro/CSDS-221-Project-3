const mongoose = require('mongoose')

const sendSchema = mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    fromUsername: {
        type: String,
        required: true
    },
    toUsername: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        rrequired: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Send', sendSchema)