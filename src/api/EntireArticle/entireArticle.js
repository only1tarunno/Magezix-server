const Article = require("../../models/Article");

const entireArticle = async (req, res) => {
  const result = await Article.find();
  res.send(result);
};

module.exports = entireArticle;
