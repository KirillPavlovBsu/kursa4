const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    rating: Number,
    numberVisitedEvents: Number,
    about: String,
    interests: String,
    gallery: [String],
    attendedEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    plannedEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    salt: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);