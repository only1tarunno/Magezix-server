const Article = require("../../models/Article");

const articlesCount = async (req, res) => {
  try {
    const count = await Article.estimatedDocumentCount();
    res.send({ count });
  } catch (error) {
    res.status(500).send({ error: "Error fetching article count" });
  }
};

module.exports = articlesCount;
