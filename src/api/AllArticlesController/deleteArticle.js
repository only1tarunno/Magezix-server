const Article = require("../../models/Article");

const deleteArticle = async (req, res) => {
  const id = req.params.id;

  try {
    const query = { _id: id };
    const result = await Article.deleteOne(query);
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = deleteArticle;
