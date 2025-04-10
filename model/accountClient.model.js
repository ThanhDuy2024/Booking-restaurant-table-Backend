const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema(
  {
    fullName: String,
    email: String,
    password: String,
    status: String,
    deleted: Boolean
  },
  {
    timestamps: true
  }
)

const AccoutClient = mongoose.model("AccountClient", schema, "account-client");

module.exports = AccoutClient;