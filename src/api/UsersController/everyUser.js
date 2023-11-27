const User = require("../../models/User");

const everyUserDashboard = async (req, res) => {
  try {
    const page = parseInt(req?.query?.page) || 0;
    const size = parseInt(req?.query?.size) || 5;

    const result = await User.find()
      .skip(page * size)
      .limit(size);

    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = everyUserDashboard;
