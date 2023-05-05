const express = require("express");
const getUserAxiosController = require ("../controller/axiosController");
const {
  addUserController,
  getUserController,
  getUserByUsernameController,
  updateUserController,
  deleteUserController,
} = require("../controller/userController");
const validator = require("../utils/validator");
const {validateUser, isAdmin} = require('../middleware/middleware.js');
const { body } = require("express-validator");
const router = express.Router();

router.get("/user", getUserController);
router.post("/search-user",validateUser, isAdmin, getUserByUsernameController);
router.put("/user/:username", updateUserController);
router.post(
  "/user",
  body("password").isLength({ min: 5, max: 15 }),
  body("username").isLength({ min: 5, max: 15}),
  validator,
  addUserController
);
router.delete("/user/:username", deleteUserController);


router.get("/axios", getUserAxiosController);


module.exports = router;