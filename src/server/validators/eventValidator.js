const Joi = require('@hapi/joi');
const faker = require('faker');

const validationErrors = {
    maxParticipients: 'Max participients field should be greater or equal of one',
    typeOfAccess: 'Type of access should be public or private',
    rate: 'Rate field should be greater or equal of zero',
};

const schema = Joi.object({
    creator: Joi.string().required(),
    name: Joi.string().required(),
    maxParticipients: Joi.number().default(10).min(1).error(() => {
        return new Error(validationErrors.maxParticipients)
    }),
    typeOfAccess: Joi.string().default('private').valid('public', 'private').error(() => {
        return new Error(validationErrors.maxParticipients)
    }),
    isChatAvailible: Joi.boolean().default(false),
    listOfParticipants: Joi.array().items(Joi.string()).default([]),
    location: Joi.string(),
    rate: Joi.number().min(0).error(() => {
        return new Error(validationErrors.rate);
    }),
    picture: Joi.string().default(faker.image.abstract())
});

module.exports = event => schema.validate(event);