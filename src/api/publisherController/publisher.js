const Publisher = require("../../models/Publisher");

const publisherController = async (req, res) => {
  try {
    const publishers = await Publisher.find();

    res.json(publishers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = publisherController;
