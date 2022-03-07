const router = require("express").Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
router.get("/", (req, res) => {
  res.send("Hello World");
});

const clientId = "5c369149d93c699d4b4a";
const clientSecrets = "fd17b96b8ead4f115e10862d2ac5b8181750b8a5";
let token = null;
router.get("/register/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}`
  );
});

router.get("/oauth-callback", (req, res) => {
  const body = {
    client_Id: clientId,
    client_secret: clientSecrets,
    code: req.query.code
  };
  const opts = { heaader: { accept: "application/json" } };
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then(res => res.data["access_token"])
    .then(_token => {
      console.log(`token : ${token}`);
      token = _token;
      res.json({ ok: 1 });
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;
