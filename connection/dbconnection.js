const mongoose = require('mongoose')

const data = process.env.database

mongoose.connect(data,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
console.log("database and server connected using mongoose");
}).catch((error)=>{
console.log("no connection between db and server, error=  ",error);
})