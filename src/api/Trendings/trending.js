const Article = require("../../models/Article");

const trending = async (req, res) => {
  try {
    const trendingArticles = await Article.find().sort({ views: -1 }).limit(6);
    res.send(trendingArticles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = trending;
