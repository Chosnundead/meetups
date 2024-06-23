const path = require("path");
const Users = require("../db/usersModel");
const jwt = require("jsonwebtoken");

class AuthController {
    async loginPage(req, res) {
        const parentDir = path.resolve(__dirname, "..");
        res.sendFile(path.join(parentDir, "pages", "login.html"));
    }

    async registerPage(req, res) {
        const parentDir = path.resolve(__dirname, "..");
        res.sendFile(path.join(parentDir, "pages", "register.html"));
    }

    async profilePage(req, res) {
        if (req.payload) {
            res.status(200).send(
                `<h2>Welcome to the resource, ${req.payload.login}!</h2>` +
                    `<h3>Your id: ${req.payload.id}</h3>` +
                    `<h3>Your role: ${req.payload.role}</h3>` +
                    `<a href="http://localhost:3000/logout">Log Out</a>`
            );
        } else {
            res.redirect("/login");
        }
    }

    async login(req, res) {
        const candidate = await Users.findOne({
            where: {
                login: req.body.username,
                password: req.body.password,
            },
        });
        if (candidate) {
            const accessToken = jwt.sign(
                {
                    id: candidate.user_id,
                    role: candidate.role,
                    login: candidate.login,
                },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            const refreshToken = jwt.sign(
                { id: candidate.user_id },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );
            await Users.update(
                { refresh_token: refreshToken },
                { where: { user_id: candidate.user_id } }
            );
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
            });
            // res.cookie("refreshToken", refreshToken, {
            //     httpOnly: true,
            // });
            res.redirect("/profile");
        } else {
            res.redirect("/login");
        }
    }

    async createUser(req, res) {
        console.log("req.body");
        const candidate = await Users.findOne({
            where: {
                login: req.body.username,
            },
        });
        if (candidate) {
            res.redirect("/register");
        } else {
            const user = await Users.create({
                login: req.body.username,
                password: req.body.password,
                role: req.body.role,
            });
            res.redirect("/login");
        }
    }

    async logout(req, res) {
        res.clearCookie("accessToken");
        // res.clearCookie("refreshToken");
        res.redirect("/login");
    }

    async refresh(req, res) {
        try {
            const accessToken = req.cookies.accessToken;
            if (!accessToken) {
                res.redirect("/login");
                return;
            }
            const payload = await new Promise((resolve, reject) => {
                jwt.verify(
                    accessToken,
                    process.env.JWT_SECRET,
                    (err, payload) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(payload);
                        }
                    }
                );
            });
            const user = await Users.findByPk(payload.id);
            if (!user) {
                res.redirect("/login");
                return;
            } else {
                const newAccessToken = jwt.sign(
                    { id: user.user_id, role: user.role, login: user.login },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );
                res.cookie("accessToken", newAccessToken, { httpOnly: true });
                res.redirect("/profile");
            }
        } catch (err) {
            res.redirect("/login");
        }
    }
}
module.exports = new AuthController();
