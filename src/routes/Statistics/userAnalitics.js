const usersCount = require("../../api/UsersCount/usersCount");

const router = require("express").Router();

router.get("/usersCount", usersCount);

module.exports = router;
