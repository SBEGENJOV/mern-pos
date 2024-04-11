const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: Number, require: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
