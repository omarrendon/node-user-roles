const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../conrollers/user.controllers");

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
