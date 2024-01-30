// const mongoose = require('mongoose');

// // Student model
// const studentSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     cpassword: String,
//     email: String,
//     mobile: Number
// });

// // Teacher model
// const teacherSchema = new mongoose.Schema({
//     username: String,
//     password: String,
// });

// // Export both models in a single object
// module.exports = {
//     Student: mongoose.model('student', studentSchema),
//     Teacher: mongoose.model('teacher', teacherSchema)
// };


const mongoose = require('mongoose');
const moment = require('moment');

// Student model
const studentSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  mobile: Number,
});

// Teacher model
const teacherSchema = new mongoose.Schema({
  tusername: String,
  tpassword: String,
});

//Storing results of students
const resultsSchema = new mongoose.Schema({
  email: String,
  report: String,
  condition: String,
  date: {
    type: String, // Change the type to String
    default: () => moment().format('DD-MM-YYYY'), // Set the default value using moment
  },
});

// Export both models in a single object
module.exports = {
  student: mongoose.model('student', studentSchema),
  teacher: mongoose.model('teacher', teacherSchema),
  reports:mongoose.model('reports',resultsSchema),
};




