const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//! register
router.post("/register", async (req, res) => {
  try {
    const { userame, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ userame, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json("Yeni kullanıcı eklendi.");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
