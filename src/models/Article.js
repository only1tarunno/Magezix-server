const { model, Schema } = require("mongoose");

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  Approved: {
    type: String,
    required: true,
  },
  premium: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorEmail: {
    type: String,
    required: true,
  },
  authorPhoto: {
    type: String,
    required: true,
  },
  postedTime: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
});

const Article = model("Article", ArticleSchema);

module.exports = Article;
