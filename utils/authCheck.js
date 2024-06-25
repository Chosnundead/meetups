const Users = require("../db/usersModel");
const Meetup = require("../db/meetupModel");
function isAdmin(id) {
    return new Promise((resolve, reject) => {
        Users.findOne({ where: { user_id: id } }).then((user) => {
            if (user.role === "admin") resolve(true);
            else resolve(false);
        });
    });
}

function isAuthor(id, meetup_id) {
    return new Promise((resolve, reject) => {
        Meetup.findOne({ where: { meetup_id: meetup_id } }).then((meetup) => {
            if (meetup.author_id === id) resolve(true);
            else resolve(false);
        });
    });
}

module.exports = { isAdmin, isAuthor };
