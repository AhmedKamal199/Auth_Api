const router = require("express").Router();
const auth = require("../../midlewares/auth");
router.get("/", auth, (req, res) => {
	console.log(req.user);
  res.send(`Hello ${req.user.name}`);
});

module.exports = router;
