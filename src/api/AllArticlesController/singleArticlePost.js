const Article = require("../../models/Article");

const singleArticlePost = async (req, res) => {
  const id = req.params.id;

  try {
    await Article.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true });

    const result = await Article.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = singleArticlePost;
