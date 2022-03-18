const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt_s = process.env.JWT_SECRET;
function auth(req, res, next) {
  let aut = false;
  const Bearer=  req.header("Authorization");
  const token = Bearer.split(" ")[1]

  if (!token) {
    return res.status(400).json({ msg: "No token" });
  }

  try {
    const decoded = jwt.verify(token, jwt_s);
    const { id, name } = decoded;
    aut = true;
    console.log(decoded)
    req.user = { id, name, aut };
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
