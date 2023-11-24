const allArticles = require("../../api/AllArticlesController/allArticles");
const allArticlesPost = require("../../api/AllArticlesController/allArticlesPost");
const singleArticlePost = require("../../api/AllArticlesController/singleArticlePost");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/allArticles", allArticles);

router.get("/allArticles/:id", verifyToken, singleArticlePost);

router.post("/allArticles", verifyToken, allArticlesPost);

module.exports = router;
