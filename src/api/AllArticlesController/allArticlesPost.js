const Article = require("../../models/Article");

const allArticlesPost = async (req, res) => {
  try {
    const article = req.body;

    const result = await Article.create(article);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = allArticlesPost;
