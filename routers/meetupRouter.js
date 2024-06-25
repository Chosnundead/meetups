const router = require("express").Router();
const MeetupController = require("../controllers/meetupController");

router.get("/", MeetupController.getMeetups);
router.get("/:id", MeetupController.getMeetup);
router.post("/", MeetupController.createMeetup);
router.put("/:id", MeetupController.updateMeetup);
router.delete("/:id", MeetupController.deleteMeetup);
router.post("/subscribe/:id", MeetupController.subscribe);
router.post("/unsubscribe/:id", MeetupController.unsubscribe);

module.exports = router;
