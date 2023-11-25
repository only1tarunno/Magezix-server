const User = require("../../models/User");

const userUpdate = async (req, res) => {
  const email = req.params.email;
  const updatingUser = req.body;

  try {
    const filter = { email: email };
    const updateDoc = {
      $set: {
        premiumTaken: updatingUser.premiumTaken,
        premimiumExpire: updatingUser.premimiumExpire,
      },
    };

    const result = await User.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = userUpdate;
