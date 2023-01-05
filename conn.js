const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/students-api", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection success");
}).catch((err)=>{
        console.log("no connection");
    })


// const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/students-api", {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection success");
// }).catch((err)=>{
//     console.log("no connection");
// })
