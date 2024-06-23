const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const meetupRouter = require("./routers/meetupRouter");
const usersRouter = require("./routers/usersRouter");
const authRouter = require("./routers/authRouter");
const authMiddleware = require("./middlewares/authMiddleware");
const bodyParser = require("body-parser");
const db = require("./db/db");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger");
const PORT = 3000;

app.use(cookieParser(process.env.JWT_SECRET));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authMiddleware);

app.use("/", authRouter);
app.use("/meetups", meetupRouter);
app.use("/users", usersRouter);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(PORT, () => {
    (async () => {
        await db.sync({ alter: true });
    })().then(() => {
        console.log(`Server is running on port ${PORT}`);
    });
});
