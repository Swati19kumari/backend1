//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";

//import dotenv ko hmlog abhi package json mai dev mai request karte hai ki exp karne do by writing -r dotenv/config
dotenv.config({
    path:'./env'
})

connectDB()











/*

import express from "express";
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/$
            {DB_NAME}`)
    app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port $
            {process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})();

*/
