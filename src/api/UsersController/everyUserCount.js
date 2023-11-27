const User = require("../../models/User");

const everyUserCount = async (req, res) => {
  try {
    const count = await User.estimatedDocumentCount();
    res.send({ count });
  } catch (error) {
    res.status(500).send({ error: "Error fetching article count" });
  }
};

module.exports = everyUserCount;
