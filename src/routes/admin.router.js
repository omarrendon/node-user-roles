const { Router } = require("express");
const router = Router();

const { getAdministrators } = require("../conrollers/admin.controllers");

router.get("/", getAdministrators);

module.exports = router;
