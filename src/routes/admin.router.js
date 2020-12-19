const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    route: "user",
  });
});

module.exports = router;
