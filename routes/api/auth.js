const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("Hello World");
});

const clientId = "5c369149d93c699d4b4a";
const clientSecrets = "fd17b96b8ead4f115e10862d2ac5b8181750b8a5";
router.get("/register", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}`
  );
});

module.exports = router;
