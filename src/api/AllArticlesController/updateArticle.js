const Article = require("../../models/Article");

const updateArticle = async (req, res) => {
  const id = req.params.id;
  const updatingInfo = req.body;

  try {
    const filter = { _id: id };
    const updateDoc = {
      $set: {
        ...updatingInfo,
      },
    };

    const result = await Article.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = updateArticle;
