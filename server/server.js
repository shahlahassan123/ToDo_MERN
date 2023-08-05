const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/TodoRoute")

const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT | "4000";

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Db connected successfully")
}).catch((err)=>{
    console.log(err);
})

app.use('/',routes);

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);

})

