const allArticles = require("../../api/AllArticlesController/allArticles");
const allArticlesPost = require("../../api/AllArticlesController/allArticlesPost");
const authorArticles = require("../../api/AllArticlesController/authorArticles");
const premiumArticles = require("../../api/AllArticlesController/premiumArticle");
const singleArticlePost = require("../../api/AllArticlesController/singleArticlePost");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// all article
router.get("/premiumArticles", verifyToken, premiumArticles);

// onlypremium articles
router.get("/allArticles", allArticles);

// articles by email
router.get("/allArticles/:email", verifyToken, authorArticles);

// single article
router.get("/allArticles/:id", verifyToken, singleArticlePost);

router.post("/allArticles", verifyToken, allArticlesPost);

module.exports = router;
