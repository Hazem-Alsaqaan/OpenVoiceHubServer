import express from "express"
import cors from "cors"
import {connectionWithDataBaseHandler} from "./db.js"
import dotenv from "dotenv"
import APIsError from "./src/utils/APIsError.js"
import taskesRoutes from "./src/routes/taskesRoutes.js"

dotenv.config({
    path: ".env",
  });
const app = express()

app.use(express.json())
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors())

app.use("/api/v1/openvoicehub", taskesRoutes)


app.all("*", (req, res, next)=>{
    next( new APIsError(`this route isn't correct ${req.originalUrl}`, 404))
})

app.use((err, req, res, next)=>{
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack
    })
})

connectionWithDataBaseHandler()
app.listen(4001, ()=>{
    console.log("Server is running on port 4001...")
})