const Users = require("../db/usersModel");
const Sequelize = require("sequelize");
class UserController {
    async getUsers(req, res) {
        const users = await Users.findAll();
        res.json(users);
    }

    async getUser(req, res) {
        const user = await Users.findByPk(req.params.id);
        res.json(user);
    }

    async createUser(req, res) {
        const user = await Users.create(req.body);
        res.json(user);
    }

    async updateUser(req, res) {
        const user = await Users.update(req.body, {
            where: { user_id: req.params.id },
        });
        res.json(user);
    }

    async deleteUser(req, res) {
        const user = await Users.destroy({
            where: { user_id: req.params.id },
        });
        res.json(user);
    }
}

module.exports = new UserController();
