const validators = require('../validators');
const Category = require('../models/Category'); 
const Event = require('../models/Event');
const mongoose = require('mongoose');
const { categoryValidator } = validators;

const createCategory = async (req, res) => {
    const category = Object.assign({}, req.body);
    try {
        const validationResult = categoryValidator(category);
        if (validationResult.error) {
            res.status(400).send({ error: validationResult.error.message });
        } else {
            const validatedCategory = validationResult.value;
            const dbCategory = await new Category(validatedCategory);
            await dbCategory.save();
            res.status(201).send(dbCategory);
        }
    } catch(error) {
        res.status(500).send(error);
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({})
                                            .populate('events')
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).send('db error');
        console.log(err);
    }
}

const getCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).send({error:'Incorrect id'})
    }
    try {
        const category = await Category.findById(categoryId)
        if(!category) {
            return res.status(404).send(await category.populate('events'));
        }
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send('db error');
        console.log(err);
    }
}

const addEvent = async (req, res) => {
    const categoryId = req.params.id;
    const eventId = req.body.eventId;
    if(! mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).send({error:'Incorrect id'})
    }
    try {
        const category = await Category.findById(categoryId);
        if(! category) {
            return res.status(404).send({ error: 'There is no category with such id!' });
        }
        const event = await Event.findById(eventId);
        if(! event) {
            return res.status(404).send({ error: 'There is no event with such id!' });
        }
        category.events = [...category.events, eventId];
        await category.save();
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send('db error');
        console.log(err);
    }
}

module.exports = { 
    getAllCategories,
    getCategoryById,
    createCategory,
    addEvent
}