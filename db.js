import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config({
    path: ".env"
})

const { URL } = process.env

   export const connectionWithDataBaseHandler =()=> mongoose.connect(URL).then(()=>console.log("connection with data base is succeded..."))
.catch((err)=>console.log(`connection with data base is failed ${err}`))


