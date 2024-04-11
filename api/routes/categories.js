const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

//hepsini getirme
router.get("/get-category", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
});

//yeni ekleme
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Kayıt başarılı");
  } catch (error) {
    res.status(400).json(error);
  }
});

//güncelleme
router.put("/put-category/:categoryid", async (req, res) => {
  try {
    const categoryId = req.params.categoryid;
    await Category.findByIdAndUpdate(categoryId, req.body);
    res.status(200).json("Güncelleme başarılı");
  } catch (error) {
    res.status(400).json("error");
  }
});

//silme
router.delete("/delete-category/:categoryid", async (req, res) => {
  try {
    const categoryId = req.params.categoryid;
    await Category.findByIdAndDelete(categoryId);
    res.status(200).json("Silme başarılı");
  } catch (error) {
    res.status(400).json("error");
  }
});

module.exports = router;
