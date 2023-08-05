const mongoose = require("mongoose");

const ToDoModel = mongoose.Schema({
    text : {type : String, required : true}
})

module.exports = mongoose.model("ToDos", ToDoModel)