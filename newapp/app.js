const Express = require("express");
const Mongoose = require("mongoose");
const Cors = require("cors");
const BodyParser = require("body-parser");
const {StudentModel} = require("./Models/Student.js");

const app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));

Mongoose.connect("mongodb+srv://adithyak47:adimalu1234@cluster0.fs3vi9t.mongodb.net/Students2DB?retryWrites=true&w=majority");

app.get("/",(req,res)=>{
    res.send("This is the main route");

})

app.post("/addstudent",async (req,res)=>{
    let data = req.body;
    console.log(data);
    let obj = new StudentModel(data);
    let result = await obj.save();
    res.send(result);
});

app.get("/viewstudent",async (req,res)=>{
    let result = await StudentModel.find();
    res.send(result);
});

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});