const { model, Schema } = require("mongoose");

const PublisherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Publisher = model("Publisher", PublisherSchema);

module.exports = Publisher;
