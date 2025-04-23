import express from "express"
import mongoose from "mongoose"
import { connectDB } from "./config/connectDB.js"

const app = express()

connectDB()




app.listen(3000,()=>{
    console.log("running");
})