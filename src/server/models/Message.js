const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    messageText: String,
    date: Date,
    senderUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    recieverUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Message', MessageSchema);