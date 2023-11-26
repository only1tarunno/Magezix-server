const createPublisher = require("../../api/publisherController/createPublisher");
const publisherController = require("../../api/publisherController/publisher");
const verifyAdmin = require("../../middleWares/verifyAdmin");
const verifyToken = require("../../middleWares/verifyToken");

const router = require("express").Router();

router.get("/publisher", publisherController);

router.post("/publisher", verifyToken, verifyAdmin, createPublisher);

module.exports = router;
