const Joi = require('@hapi/joi');
const faker = require('faker');

const schema = Joi.object({
    name: Joi.string().required(),
    members: Joi.array().items(Joi.string()).default([]),
    picture: Joi.string().default(faker.image.abstract()),
    messages: Joi.array().items(Joi.string()).default([]),
    creator: Joi.string()
});

module.exports = group => schema.validate(group);