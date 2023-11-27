const checkPremium = require("../../api/UsersController/checkpremium");
const createUser = require("../../api/UsersController/createUser");
const everyUserDashboard = require("../../api/UsersController/everyUser");
const everyUserCount = require("../../api/UsersController/everyUserCount");
const userProfileUpdate = require("../../api/UsersController/userProfileUpdate");
const userUpdate = require("../../api/UsersController/userUpdate");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// check user premium
router.get("/users/UserPremium/:email", verifyToken, checkPremium);

// get all user
router.get("/everyUsers", verifyToken, verifyAdmin, everyUserDashboard);
// count all user
router.get("/everyUsersCount", verifyToken, verifyAdmin, everyUserCount);

router.post("/users", createUser);

// user premium update
router.patch("/users/:email", userUpdate);
// user update
router.patch("/users/UserPremium/:email", verifyToken, userProfileUpdate);

module.exports = router;
