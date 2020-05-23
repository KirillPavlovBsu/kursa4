const hashPassword = require('../utils/hashPassword');
const validators = require('../validators');
const User = require('../models/User');
const mongoose = require('mongoose');
const { userValidator } = validators;

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
                                    .populate('attendedEvents')
                                    .populate('plannedEvents');
        res.status(200).send(users);
    } catch(error) {
        res.status(500).send(error);
    }
};

const createUser = async (req, res) => {
    const user = Object.assign({}, req.body);
    try {
        const validationResult = userValidator(user);
        if (validationResult.error) {
            res.status(400).send({ error: validationResult.error.message });
        } else {
            const validatedUser = validationResult.value;
            const { salt, password } = await hashPassword(validatedUser.password);
            const dbUser = await new User({...validatedUser, salt, password});
            await dbUser.save();
            res.status(201).send(dbUser);
        }
    } catch(error) {
        res.status(500).send(error);
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (! mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({error:'Incorrect id'});
    }    
    try {
        const user = await User.findById(id)
                                .populate('attendedEvents')
                                .populate('plannedEvents');
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404);
        }
    } catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById
}