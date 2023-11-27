const Article = require("../../models/Article");

const entireArticle = async (req, res) => {
  const page = parseInt(req?.query?.page);
  const size = parseInt(req?.query?.size);
  const result = await Article.find()
    .skip(page * size)
    .limit(size);
  res.send(result);
};

module.exports = entireArticle;
