const router = require("express").Router();
const auth = require("../../midlewares/auth");
router.get("/", auth, (req, res) => {
  res.send("Hello World");
});

module.exports = router;