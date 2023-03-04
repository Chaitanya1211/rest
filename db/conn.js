const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log("Error :" + err);
  });
