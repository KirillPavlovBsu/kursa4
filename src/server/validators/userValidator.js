const Joi = require('@hapi/joi');
const faker = require('faker');

const validationErrors = {
    login: 'Login must begin with a letter, must be at least 8 characters long, cannot contain special symbols except _',
    password: 'Password must be at least 8 characters long and contain at least one letter and one number',
    repeatPassword: 'Passwords must match'
};

const schema = Joi.object({
    login: Joi.string().regex(/^[a-zA-Z]\w{7,}$/).required().error(() => {
        return new Error(validationErrors.login);
    }),
    password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required().error(() => {
        return new Error(validationErrors.password);
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).error(() => {
        return new Error(validationErrors.repeatPassword)
    }),
    firstName: Joi.string().min(1).max(12).default('Anonymous'),
    lastName: Joi.string().min(1).max(12).default('Anonymous'),
    avatar: Joi.string().default(faker.image.avatar()),
    rating: Joi.number().min(0).max(5).default(0),
    numberVisitedEvents: Joi.number().min(0).default(0),
    about: Joi.string(),
    interests: Joi.string(),
    gallery: Joi.array().items(Joi.string()),
    attendedEvents: Joi.array().items(Joi.string()).default([]),
    plannedEvents: Joi.array().items(Joi.string()).default([])
});

module.exports = user => schema.validate(user);