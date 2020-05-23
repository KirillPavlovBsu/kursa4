const Joi = require('@hapi/joi');
const faker = require('faker');

const schema = Joi.object({
    name: Joi.string().required(),
    events: Joi.array().items(Joi.string()),
    picture: Joi.string().default(faker.image.abstract())
});

module.exports = category => schema.validate(category);