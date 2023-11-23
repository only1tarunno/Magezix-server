const trendingArticle = require("../../api/Trendings/trending");
const router = require("express").Router();

router.get("/trending", trendingArticle);

module.exports = router;
