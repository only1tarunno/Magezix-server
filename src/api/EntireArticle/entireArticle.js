const Article = require("../../models/Article");

const entireArticle = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const size = parseInt(req.query.size) || 6;

    const result = await Article.find()
      .skip(page * size)
      .limit(size);

    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = entireArticle;
