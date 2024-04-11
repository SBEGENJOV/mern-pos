const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = 5000;
dotenv.config();

const categoryRouter = require("./routes/categories.js");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Baglantı gerçekleşti");
  } catch (error) {
    throw error;
  }
};
//ara yazlımlar
app.use(express.json());
app.use(cors());

app.use("/api/category", categoryRouter);

app.listen(port, () => {
  connect();
  console.log(`sunucu şuan ${port} unda çalışıyor`);
});
