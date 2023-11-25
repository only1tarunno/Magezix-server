const paymentIntent = require("../../api/Payment/paymentIntent");
const router = require("express").Router();

// router.get();

router.post("/create-payment-intent", paymentIntent);

module.exports = router;
