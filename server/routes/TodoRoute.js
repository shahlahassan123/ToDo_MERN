const express = require("express");
const router = express.Router();

const {getAllToDos, saveToDo, updateToDo, deleteToDo} = require("./../controllers/ToDoController");

router.get("/", getAllToDos);
router.post("/save", saveToDo);
router.post("/update/:id", updateToDo);
router.post("/delete/:id", deleteToDo)

module.exports = router;