const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  price: Number,
  date: Date,
});

const Sale = mongoose.model("Sale", salesSchema);

module.exports = Sale
