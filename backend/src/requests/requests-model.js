var mongoose = require("mongoose");

var requestSchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    movie: { type: String, required: true },
    collaborators: { type: String, required: false },
    progress: { type: Number, required: false },
  },
  { collection: "requests" }
);

module.exports = mongoose.model("Request", requestSchema);
