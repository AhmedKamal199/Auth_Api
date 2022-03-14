const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors("*"));
app.use(bodyParser.json());
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/hel", require("./routes/api/hel"));
const port = process.env.PORT || 5500;

const run = async () => {
  try {
    await mongo.connect(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is run on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
//bOhbzfeLQ1UamzGP
run();
