const router = require("express").Router();
const UserController = require("../controllers/usersController");
const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);
router.post("/register", AuthController.createUser);
router.get("/refresh", AuthController.refresh);
router.get("/logout", AuthController.logout);
router.get("/profile", AuthController.profilePage);
router.get("/login", AuthController.loginPage);
router.get("/register", AuthController.registerPage);

module.exports = router;
