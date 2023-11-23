const publisherController = require("../../api/publisherController/publisher");

const router = require("express").Router();

router.get("/publisher", publisherController);

module.exports = router;
