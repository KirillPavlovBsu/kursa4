const validators = require('../validators');
const Group = require('../models/Group');
const mongoose = require('mongoose');
const { groupValidator } = validators;

const createGroup = async (req, res) => {
    const group = Object.assign({}, req.body);
    try {
        const validationResult = groupValidator(group);
        if (validationResult.error) {
            res.status(400).send({ error: validationResult.error.message });
        } else {
            const validatedGroup = validationResult.value;
            const dbGroup = await new Group(validatedGroup);
            await dbGroup.save();
            res.status(201).send(dbGroup);
        }
    } catch(error) {
        res.status(500).send(error);
    }
};

const getGroups = async (req, res) => {
    try {
        const groups = await Event.find({})
                                    .populate('members')
                                    .populate('messages')
                                    .populate('creator');
        res.status(200).send(groups);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getGroupById = async (req, res) => {
    const { id } = req.params;
    if (! mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({error:'Incorrect id'});
    }    
    try {
        const event = await Event.findById(id)
                                    .populate('members')
                                    .populate('messages')
                                    .populate('creator');
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
    createGroup,
    getGroups,
    getGroupById
}