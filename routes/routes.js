const express = require("express");
const Model = require("../models/model.js");
const router = express.Router();

//Post Method
router.post("/post", (req, res) => {
  const data = new Model(req.body);
  data
    .save()
    .then((DataToSave) => {
      res.status(200).json(DataToSave);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

//Get all Method
router.get("getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    res.json(`Le document qui porte le nom ${data.nom} a été supprimé`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
