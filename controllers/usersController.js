const Users = require("../db/usersModel");
const Sequelize = require("sequelize");
class UserController {
    async getUsers(req, res) {
        try {
            if (!(await isAdmin(req.payload.id))) {
                throw new Error("You cannot get users");
            }
            const users = await Users.findAll();
            res.json(users);
        } catch (error) {
            res.status(403).json({ error: error.message });
        }
    }

    async getUser(req, res) {
        try {
            if (!(await isAdmin(req.payload.id))) {
                throw new Error("You cannot get users");
            }
            const user = await Users.findByPk(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(403).json({ error: error.message });
        }
    }

    async createUser(req, res) {
        try {
            if (!(await isAdmin(req.payload.id))) {
                throw new Error("You cannot get users");
            }
            const user = await Users.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(403).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            if (!(await isAdmin(req.payload.id))) {
                throw new Error("You cannot get users");
            }
            const user = await Users.update(req.body, {
                where: { user_id: req.params.id },
            });
            res.json(user);
        } catch (error) {
            res.status(403).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            if (!(await isAdmin(req.payload.id))) {
                throw new Error("You cannot get users");
            }
            const user = await Users.destroy({
                where: { user_id: req.params.id },
            });
            res.json(user);
        } catch (error) {
            res.status(403).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
