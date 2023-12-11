const express = require("express");

const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { signup,signin } = require("../controllers/authenticationController");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
