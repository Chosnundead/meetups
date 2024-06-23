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
                            can("read", "Meetup");
                            can("create", "Meetup");
                            can("update", "Meetup");
                            can("delete", "Meetup");
                            can("read", "Users", {
                                user_id: req.payload.id,
                            });
                            break;
                        case "user":
                            can("read", "Meetup");
                            can("create", "Meetup");
                            can("update", "Meetup", {
                                author_id: req.payload.id,
                            });
                            can("delete", "Meetup", {
                                author_id: req.payload.id,
                            });
                            can("read", "Users", {
                                user_id: req.payload.id,
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
