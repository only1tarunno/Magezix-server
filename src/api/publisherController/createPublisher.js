const Publisher = require("../../models/Publisher");

const createPublisher = async (req, res) => {
  try {
    const publisherData = req.body;
    const result = await Publisher.create(publisherData);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = createPublisher;
