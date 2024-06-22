const Meetup = require("../db/meetupModel");
const Sequelize = require("sequelize");
const meetupSchema = require("../utils/meetupSchema");

class MeetupController {
    async getMeetups(req, res) {
        // Примеры запросов:
        // - Получение списка митапов (по умолчанию 10 митапов на странице, страница 1):
        //   GET /meetups?page=1&limit=10
        // - Поиск митапов по названию (case-insensitive):
        //   GET /meetups?page=1&limit=10&title=example
        // - Фильтрация митапов по тегам (указываются несколько тегов через запятую):
        //   GET /meetups?page=1&limit=10&tags=first,second
        // - Фильтрация митапов по тегам и поиск по названию:
        //   GET /meetups?page=1&limit=10&title=example&tags=first,second
        const { page = 1, limit = 10, title, tags } = req.query;
        const offset = (page - 1) * limit;
        const options = {
            limit,
            offset,
            order: [["meetup_id", "ASC"]],
        };

        if (title) {
            options.where = {
                title: {
                    [Sequelize.Op.iLike]: `%${title}%`,
                },
            };
        }

        if (tags) {
            options.where = {
                tags: {
                    [Sequelize.Op.contains]: tags.split(","),
                },
            };
        }

        const meetups = await Meetup.findAndCountAll(options);
        const totalPages = Math.ceil(meetups.count / limit);

        res.json({
            data: meetups.rows,
            pagination: {
                page,
                totalPages,
                totalItems: meetups.count,
            },
        });
    }

    async getMeetup(req, res) {
        const meetup = await Meetup.findByPk(req.params.id);
        res.json(meetup);
    }

    async createMeetup(req, res) {
        /**
         * Пример запроса на добавление митапа:
         * POST /meetups
         * {
         *   "title": "Example Meetup",
         *   "description": "This is a description of an example meetup",
         *   "tags": ["example", "meetup"],
         *   "event_time": "2022-01-01T12:00:00Z",
         *   "location": "Example street, 123"
         * }
         */
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", async () => {
            const { error, value } = meetupSchema.validate(JSON.parse(body));

            if (error) {
                return res
                    .status(400)
                    .json({ error: error.details[0].message });
            }

            const meetup = await Meetup.create(value);
            res.json(meetup);
        });
    }

    async updateMeetup(req, res) {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", async () => {
            const { error, value } = meetupSchema.validate(JSON.parse(body));

            if (error) {
                return res
                    .status(400)
                    .json({ error: error.details[0].message });
            }

            const meetup = await Meetup.update(value, {
                where: { meetup_id: req.params.id },
            });
            res.json(meetup);
        });
    }

    async deleteMeetup(req, res) {
        const meetup = await Meetup.destroy({
            where: { meetup_id: req.params.id },
        });
        res.json(meetup);
    }
}

module.exports = new MeetupController();
