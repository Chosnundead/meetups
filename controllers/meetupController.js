const Meetup = require("../db/meetupModel");
class MeetupController {
    async getMeetups(req, res) {
        const meetups = await Meetup.findAll();
        res.json(meetups);
    }

    async getMeetup(req, res) {
        const meetup = await Meetup.findByPk(req.params.id);
        res.json(meetup);
    }

    async createMeetup(req, res) {
        const meetup = await Meetup.create(req.body);
        res.json(meetup);
    }

    async updateMeetup(req, res) {
        const meetup = await Meetup.update(req.body, {
            where: { meetup_id: req.params.id },
        });
        res.json(meetup);
    }

    async deleteMeetup(req, res) {
        const meetup = await Meetup.destroy({
            where: { meetup_id: req.params.id },
        });
        res.json(meetup);
    }
}

module.exports = new MeetupController();
