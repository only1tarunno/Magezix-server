const authorArticles = require("../../api/AllArticlesController/authorArticles");
const deleteArticle = require("../../api/AllArticlesController/deleteArticle");
const updateArticle = require("../../api/AllArticlesController/updateArticle");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

// articles by email
router.get("/emalArticles/:email", verifyToken, authorArticles);

router.patch("/emalArticles/:id", verifyToken, updateArticle);

router.delete("/emalArticles/:id", verifyToken, deleteArticle);

module.exports = router;
