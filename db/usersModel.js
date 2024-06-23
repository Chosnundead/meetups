const db = require("./db");
const DataTypes = require("sequelize");

const Users = db.define(
    "users",
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

// (async () => {
//     await db.sync({ alter: true });
// })();

module.exports = Users;
