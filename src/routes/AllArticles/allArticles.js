const allArticles = require("../../api/AllArticlesController/allArticles");
const allArticlesPost = require("../../api/AllArticlesController/allArticlesPost");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/allArticles", allArticles);

router.post("/allArticles", verifyToken, allArticlesPost);

module.exports = router;
