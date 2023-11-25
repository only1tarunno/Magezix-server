const checkPremium = require("../../api/UsersController/checkpremium");
const createUser = require("../../api/UsersController/createUser");
const userProfileUpdate = require("../../api/UsersController/userProfileUpdate");
const userUpdate = require("../../api/UsersController/userUpdate");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// check user premium
router.get("/users/UserPremium/:email", verifyToken, checkPremium);

router.post("/users", createUser);

router.patch("/users/:email", userUpdate);
router.patch("/users/UserPremium/:email", verifyToken, userProfileUpdate);

module.exports = router;
