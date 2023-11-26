const Article = require("../../models/Article");
const Publisher = require("../../models/Publisher");

const getPublisherArticleCount = async (req, res) => {
  try {
    const result = await Article.aggregate([
      {
        $group: {
          _id: "$publisher",
          count: { $sum: 1 },
        },
      },
    ]);

    const publisherArticleCount = result.map((item) => [item._id, item.count]);

    const publishers = await Publisher.find({}, "name");

    const finalResult = publishers.map((publisher) => {
      const found = publisherArticleCount.find(
        (item) => item[0] === publisher.name
      );
      return [publisher.name, found ? found[1] : 0];
    });

    const withHeader = [["Article", "Article by publication"], ...finalResult];

    res.send(withHeader);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = getPublisherArticleCount;
