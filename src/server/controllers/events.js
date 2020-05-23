const validators = require('../validators');
const Event = require('../models/Event');
const mongoose = require('mongoose');
const { eventValidator } = validators;

const createEvent = async (req, res) => {
    const event = Object.assign({}, req.body);
    try {
        const validationResult = eventValidator(event);
        if (validationResult.error) {
            res.status(400).send({ error: validationResult.error.message });
        } else {
            const validatedEvent = validationResult.value;
            const dbEvent = await new Event(validatedEvent);
            await dbEvent.save();
            res.status(201).send(dbEvent);
        }
    } catch(error) {
        res.status(500).send(error);
    }
};


const getEvents = async (req, res) => {
    try {
        const events = await Event.find({})
                                    .populate('creator')
                                    .populate('category')
                                    .populate('listOfParticipants');
        res.status(200).send(events);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getEventById = async (req, res) => {
    const { id } = req.params;
    if (! mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({error:'Incorrect id'});
    }    
    try {
        const event = await Event.findById(id)
                                    .populate('creator')
                                    .populate('category')
                                    .populate('listOfParticipants');
        if (event) {
            res.status(200).send(event);
        } else {
            res.status(404);
        }
    } catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getEvents,
    getEventById,
    createEvent
}