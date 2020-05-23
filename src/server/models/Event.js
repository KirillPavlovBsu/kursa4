const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    type: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: String,
    maxParticipients: Number,
    typeOfAccess: {
        type: String,
        enum: ['Public', 'Private'],
        default: 'Public'
    },
    isChatAvailible: Boolean,
    listOfParticipants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    location: String,
    rate: Number,
    picture: String
});

module.exports = mongoose.model('Event', EventSchema);