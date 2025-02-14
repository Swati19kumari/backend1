import mongoose from"mongoose";
import {DB_NAME} from "../constants.js";

//db is in another continent
const connectDB=async () =>{
    try{
      const connectionInstance=  await mongoose.connect(`${process.env.
            MONGODB_URI }/${DB_NAME}`)
            console.log(`\n MongoDB connected !! DB HOST:${
                connectionInstance.connection.host}`);  //connectionInstance ko console.log mai dalo kuch sikhne milega
    }catch(error){
        console.log("MOONGODB connection FAILED",error);
        process.exit(1)

    }
}

export default connectDB

