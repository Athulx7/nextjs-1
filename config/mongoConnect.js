import mongoose from "mongoose";

 export const mongoConnet = async()=>{
    if(mongoose.connection.readyState >= 1 ) {
        return;
    }

   await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    })
    console.log("mongo Db connnected succesfully")
}