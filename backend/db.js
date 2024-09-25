// connect to mongodb
const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/notepad";

const connectToMongodB=()=>{
    mongoose.connect(mongoURI).then(
        ()=>console.log('mongodb connected successfully')
    )
}

module.exports=connectToMongodB;
