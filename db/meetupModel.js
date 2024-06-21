const db = require("./db");
const DataTypes = require("sequelize");

const Meetup = db.define("meetup", {
    meetup_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
    },
    event_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Meetup;
