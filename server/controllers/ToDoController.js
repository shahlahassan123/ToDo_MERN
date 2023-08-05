const { default: mongoose } = require("mongoose");
const ToDoModel = require("./../models/ToDoModel")

module.exports.getAllToDos = async(req,res)=>{
    try{
        const toDos = await ToDoModel.find({});
        res.send(toDos)
    }catch(err){
        console.log(err);
    }
}

module.exports.saveToDo = async(req,res)=>{
   const newToDo = new ToDoModel({_id : new mongoose.Types.ObjectId(), text : req.body.text});
   try{
    await newToDo.save()
    res.send({message : "Added a new To DO Successfully."})
   }catch(err){
    console.log(err);
}
}

module.exports.updateToDo = async(req,res)=>{
    let id = req.params.id;
    id = id.substring(1,id.length);
    const text = req.body.text;
    try{
    const toDo = await ToDoModel.findByIdAndUpdate(id, {text});
    res.send({message: "Updated Successfully"})
    }catch(err){
        console.log(err);
    }
}

module.exports.deleteToDo = async (req,res)=>{
    let id = req.params.id;
    id = id.substring(1,id.length);
    try{
     await ToDoModel.findByIdAndDelete(id);
     res.send({messgae: "Deleted successfully"})
    }catch(err){
        console.log(err);
    }
}