const Mongoose = require("mongoose");
var StudentModel = Mongoose.model(
    "Students",
    new Mongoose.Schema(
        {
            name:String,
            rollno:String,
            admn_no:String,
            college:String
        }
    )
)
module.exports = {StudentModel};