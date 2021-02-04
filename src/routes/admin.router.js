const { Router } = require("express");
const router = Router();

const {
  getAdministrators,
  createAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../conrollers/admin.controllers");

router.get("/", getAdministrators);
router.get("/:admin_id", getOneAdmin);
router.post("/", createAdmin);
router.put("/:admin_id", updateAdmin);
router.delete("/:admin_id", deleteAdmin);

module.exports = router;
