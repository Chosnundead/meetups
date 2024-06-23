const Joi = require("joi");

const meetupSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).default([]),
    event_time: Joi.date().iso().required(),
    location: Joi.string().required(),
    author_id: Joi.number().required(),
});

module.exports = meetupSchema;
