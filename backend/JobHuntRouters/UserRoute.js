const express = require("express");
const router = express.Router();
const User = require("../JobHuntModels/UserModel");
router.post("/register", async (req, res) => {
  try {
    const newTemporaryUser = new User(req.body);
    const newUser = await newTemporaryUser.save();
    res.send("Sucessfully created the user");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/update", async (req, res) => {
  try {
    //updating the details
    await User.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      req.body
    );
    const updatedUser = await User.findOne({ _id: req.body._id });
    res.send(updatedUser);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
