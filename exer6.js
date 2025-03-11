import mongoose from "mongoose";
// connection string
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

// Subject model
const Student = mongoose.model(
  "Student",
  {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
  },
  "studentData"
);
