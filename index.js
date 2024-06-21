const app = require("express")();
const meetupRouter = require("./routers/meetupRouter");
const PORT = 3000;

app.use("/", meetupRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
