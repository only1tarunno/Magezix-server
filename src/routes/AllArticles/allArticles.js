const allArticles = require("../../api/AllArticlesController/allArticles");

const router = require("express").Router();

router.get("/allArticles", allArticles);

module.exports = router;
