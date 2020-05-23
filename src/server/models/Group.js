const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    picture: String,
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Group', GroupSchema);