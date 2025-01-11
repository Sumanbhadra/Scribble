const { Router } = require("express");

const User = require("../models/userModel");

const router = Router();

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const userdata = await User.create({
      name,
      email,
    });
    res.status(201).json(userdata);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create user" });
  }
  return res.redirect("/");
});

router.get("/", async(req, res) => {
    const allUsers = await User.find();
    try {
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Failed to fetch users" });
        
    }
});

module.exports = router;