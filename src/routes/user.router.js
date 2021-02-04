const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getOneUser,
} = require("../conrollers/user.controllers");

router.get("/", getUsers);
router.get("/:user_id", getOneUser);
router.post("/", createUser);
router.delete("/:user_id", deleteUser);
router.put("/:user_id", updateUser);

module.exports = router;
