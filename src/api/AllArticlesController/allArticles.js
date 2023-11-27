const Article = require("../../models/Article");

const allArticles = async (req, res) => {
  const offset = parseInt(req.query.offset);
  const limit = parseInt(req.query.limit);
  const filter = req.query.search;
  const tagFilter = req.query.tags;
  const publishFilter = req.query.publisher;

  let query = { Approved: "approved" };

  if (filter) {
    query.title = { $regex: filter, $options: "i" };
  }
  if (tagFilter) {
    query.tags = { $in: [tagFilter] };
  }

  if (publishFilter) {
    query.publisher = publishFilter;
  }

  try {
    const approvedArticles = await Article.find(query)
      .skip(limit * offset)
      .limit(limit);

    articlesCount = await Article.countDocuments({
      Approved: "approved",
    });

    const result = {
      articles: approvedArticles,
      articlesCount: articlesCount,
    };

    res.send(result);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = allArticles;
