const usersCount = require("../../api/UsersCount/usersCount");
const getPublisherArticleCount = require("../../api/analytics/getPublisherArticleCount");

const router = require("express").Router();

router.get("/usersCount", usersCount);

router.get("/artcleCountbyCategory", getPublisherArticleCount);

module.exports = router;
