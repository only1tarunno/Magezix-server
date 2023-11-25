const Article = require("../../models/Article");

const authorArticles = async (req, res) => {
  const email = req.params.email;

  if (email !== req.user.email) {
    return res.status(403).send({ message: "forbidden" });
  }
  try {
    const result = await Article.find({ authorEmail: email });

    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = authorArticles;
