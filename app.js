const express = require("express");
const Student = require("./models/students");
const validator = require("validator");
require("./DB/conn");
const Students = require("./models/students");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("Hello From Praveen_Kumar_Parjapat.")
})

app.post("/student", (req,res) => {
    console.log(req.body);
    const user = new Student(req.body);

// below is a then and catch method
        user.save().then(()=>{
            res.status(201).send(user);
        }).catch((e)=>{
            res.status(400).send(e);
        })

})

// below is a async , await method..
// app.post("/student", async(req,res) => {
//     try{
//         const user = new Student(req.body);
//         const createuser = await user.save();
//         res.status(201).send(createuser);

//     }catch(e){ res.status(400).send(e); }
   
// })




// read data of registered students.
// app.get("/students", async(req,res)=>{
    
//     try{
//         const studentsData = await Students.find();
//         res.send(studentsData);

//     }catch(e){
//         res.send(e);
//     }
// });

// // get theh individual student data using ID.
//     app.get("/students/:_id", async (req, res) => {
//         try{
//             const _id = req.params.id;
//             const studentData = await Student.findById(_id);
//             console.log(studentData);

//             if(!studentData){
//                 return res.student(404).send();
//             }else{
//                 res.send(studentData);
//             }

//         }catch(e){
//             res.send(e);
//         }
//     })

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})


// project restapi practise..
// const express = require("express");
// const mongoose = require("mongoose");
// const student = require("./models/students");
// require("./DB/conn");
// const app = express();
// const port = process.env.port || 3000;

// app.use(express.json());
// app.get("/", (req,res) =>{
//     res.send("hello nodejs from praveenkumar");
// })
// app.post("/student", (req,res)=>{
//     console.log(req.body);

//     const user = new student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })

// app.listen(port, ()=>{
//     console.log(`connectio is setup at ${port}`);
// })
