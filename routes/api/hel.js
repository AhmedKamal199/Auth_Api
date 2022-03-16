const router = require("express").Router();
const auth = require("../../midlewares/auth");
router.get("/", auth, (req, res) => {
	const { name, aut } = req.user;
  res.json({name, aut})
});

module.exports = router;
