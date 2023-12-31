const deleteArticle = require("../../api/AllArticlesController/deleteArticle");
const updateArticle = require("../../api/AllArticlesController/updateArticle");
const articlesCount = require("../../api/EntireArticle/articlesCount");
const entireArticle = require("../../api/EntireArticle/entireArticle");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/entireArticle", verifyToken, verifyAdmin, entireArticle);

router.get("/entireArticlesCount", verifyToken, verifyAdmin, articlesCount);

router.patch("/entireArticle/:id", verifyToken, verifyAdmin, updateArticle);

router.delete("/entireArticle/:id", verifyToken, verifyAdmin, deleteArticle);

module.exports = router;
