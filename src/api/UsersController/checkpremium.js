const User = require("../../models/User");

const checkPremium = async (req, res) => {
  const email = req.params.email;

  const query = { email: email };
  const user = await User.findOne(query);

  if (user) {
    premiumUser = user?.premiumTaken;
  }
  res.send(user);
};

module.exports = checkPremium;
