const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors("*"));

app.use("/api/auth", require("./routes/api/auth"));
const port = process.env.PORT || 5000;

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
