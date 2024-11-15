const mongoose = require("mongoose");
const User = require("../models/customerModel.js");

//! getAllUsers
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
};

//! getUserByID
const getUserByID = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//! New User
const newUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const newUser = new User({
      userName,
      userEmail,
      userPassword,
    });
    // saving
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//! Delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    if (!userId) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//! update user by PUT
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateUser) {
      res.status(404).json({ message: "user not found" });
      console.log("user not found");
    }
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error.message);
  }
};
//! update user by PATCH
const patchUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateUser) {
      res.status(404).json({ message: "user not found" });
      console.log("user not found");
    }
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  newUser,
  deleteUser,
  updateUser,
  patchUser,
};
