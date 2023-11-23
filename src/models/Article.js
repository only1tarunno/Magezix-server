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
  email: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  description: {
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
