const express = require("express");
const router = express.Router();
const Note = require("../schemas/noteSchema.js");
router.get("/all", async (req, res) => {
  var notes = await Note.find();
  res.json(notes);
});
router.get("/list/:userid", async (req, res) => {
  var notes = await Note.find({ userid: req.params.userid });
  res.json(notes);
  console.log("Notes homepage");
});

router.post("/add", async (req, res) => {
  const { id, userid, title, content } = req.body;
  const newNote = new Note({ id, userid, title, content });
  await newNote.save();
  res.json({ message: "New note added" });
});

router.get("/delete/:id", async (req, res) => {
  await Note.deleteOne({ id: req.params.id });
  res.json({ message: "Note deleted successfully" });
});

// router.post("/update", async (req, res) => {
//   const { id, userid, title, content } = req.body;
//   await Note.deleteOne({ id: id });
//   const newNote = new Note({ id, userid, title, content });
//   await newNote.save();
//   res.json({ message: "Note updated successfully" });
// });

router.put("/update", async (req, res) => {
  const { id, userid, title, content } = req.body;
  var result = await Note.updateOne(
    {
      id: id,
    },
    {
      $set: {
        title: title,
        content: content,
      },
    }
  );
  res.json(result);
});
module.exports = router;
