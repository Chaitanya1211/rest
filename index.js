const express = require("express");
const notesRoute = require("./routes/notes");
const app = express();
app.use(express.json());
require("./db/conn");
require("dotenv").config();
app.use("/notes", notesRoute);
app.get("/", (req, res) => {
  res.send("Hello Homepage");
});
app.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:3000/");
});
