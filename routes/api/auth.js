const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt_s = process.env.JWT_SECRET;
require("dotenv").config();


//@route post api/auth/register
//@desc register new user
//@access private

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Here");
  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please Enter all filed" });
  }
  User.findOne({ email }).then(user => {
    if (user) res.status(400).json({ msg: "user already token" });
  });
  const NewUser = new User({
    name,
    email,
    password
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(NewUser.password, salt, (err, hash) => {
      if (err) throw err;
      NewUser.password = hash;
      NewUser.save().then(user => {
        const token = jwt.sign({ id: user.id, name: user.name }, jwt_s, {
          expiresIn: '30d'
        });
        console.log("From server");
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        });
      });
    });
  });
});

//@route post api/auth/login
//@desc login
//@access private

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please Enter all fileds" });
  }

  User.findOne({ email }).then(user => {
    if (!user) res.status(404).json({ msg: "This user is not exits" });
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) res.status(401).json({ msg: "Invalid Crediential" });
    });

    const token = jwt.sign({ id: user.id, name: user.name }, jwt_s, { expiresIn: '30d' });
    res.status(200).json({ token, msg: "Done" });
  });
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


//@route get api/auth/current
//@desc get the current user
//@access private

router.get("/current",
  passport.authenticate("jwt", {session: false}),
  (req,res) =>{
    res.json({msg: "succes"})
  }
  )
module.exports = router;
