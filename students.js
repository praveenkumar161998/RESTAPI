const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  // define schema(schema means design/structure the database format like, name phone,address and email.)
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    // max:10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// we wil create a new collection in model

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;

