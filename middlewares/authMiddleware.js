require("dotenv").config();
const { Ability, AbilityBuilder } = require("casl");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const { rules, can } = AbilityBuilder.extract();
    console.log(`accessToken: ${req.cookies.accessToken}`);

    if (req.cookies.accessToken) {
        jwt.verify(
            req.cookies.accessToken,
            process.env.JWT_SECRET,
            (err, payload) => {
                if (err) {
                    return res.status(401).json({
                        error: "Unauthorized",
                    });
                } else if (payload) {
                    req.payload = payload;
                    console.log(`payload: ${JSON.stringify(payload)}`);

                    switch (req.payload.role) {
                        case "admin":
                            can(
                                ["read", "create", "update", "delete"],
                                ["Meetup", "Users"]
                            );
                            break;
                        case "user":
                            can(["read", "create"], "Meetup");
                            can(["update", "delete"], "Meetup", {
                                author_id: req.payload.id,
                            });
                            break;
                        default:
                            break;
                    }
                }
            }
        );
    }
    req.ability = new Ability(rules);
    next();
};

module.exports = authMiddleware;
