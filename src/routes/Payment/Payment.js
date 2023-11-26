const { verify } = require("jsonwebtoken");
const paymentIntent = require("../../api/Payment/paymentIntent");
const router = require("express").Router();

router.post("/create-payment-intent", verify, paymentIntent);

module.exports = router;
