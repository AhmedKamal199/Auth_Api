const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongoose");
const cors = require("cors");
const passport = require("passport")
// Gentral Config
require("dotenv").config();
const app = express();

app.use(cors("*"));
app.use(bodyParser.json());

// Middlewares

app.use(passport.initialize());

require("./Config/passport")(passport);


// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/hel", require("./routes/api/hel"));

//Start server
const port = process.env.PORT || 5000;

const run = async () => {
  try {
    await mongo.connect(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is run on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

// 
//bOhbzfeLQ1UamzGP
run();
