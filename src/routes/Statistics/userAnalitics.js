const usersCount = require("../../api/UsersCount/usersCount");
const getPublisherArticleCount = require("../../api/analytics/getPublisherArticleCount");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/usersCount", usersCount);

router.get(
  "/artcleCountbyCategory",
  verifyToken,
  verifyAdmin,
  getPublisherArticleCount
);

module.exports = router;
