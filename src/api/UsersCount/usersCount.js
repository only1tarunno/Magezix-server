const User = require("../../models/User");

const usersCount = async (req, res) => {
  const allusers = await User.estimatedDocumentCount();
  const basicUser = await User.countDocuments({ premiumTaken: false });
  const premiumUser = await User.countDocuments({ premiumTaken: true });

  res.send({ allusers, basicUser, premiumUser });
};

module.exports = usersCount;
