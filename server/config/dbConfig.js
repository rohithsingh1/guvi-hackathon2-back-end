const mongoose = require("mongoose");

mongoose.set("strictQuery",false);

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("connected",()=>{
    console.log("MongoDB connection Successfull");
})

connection.on("error",()=>{
    console.log('Mongo DB Connetion Failed');
})