const Joi = require("joi");

const meetupSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).default([]),
    event_time: Joi.date().required(),
    location: Joi.string().required(),
});

module.exports = meetupSchema;
