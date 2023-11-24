const createUser = require("../../api/UsersController/createUser");

const router = require("express").Router();

router.post("/users", createUser);

module.exports = router;
