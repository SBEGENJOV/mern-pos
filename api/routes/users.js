const User = require("../models/User.js");
const express = require("express");
const router = express.Router();

//! get all User
router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});
//! get a User
router.get("/:userId", async (req, res) => {
  try {
    const userid = req.params.userId;
    const user = await User.findById(userid);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
