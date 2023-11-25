const Article = require("../../models/Article");

const premiumArticles = async (req, res) => {
  try {
    const result = await Article.find({ premium: "premium" });

    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = premiumArticles;
