const express = require("express");
const {
  getAllUsers,
  getUserByID,
  newUser,
  deleteUser,
  updateUser,
  patchUser
} = require("../controllers/customerControllers.js");

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserByID);
router.post("/users", newUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);
router.patch("/users/:id", patchUser);

module.exports = router;
