import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean
    }
},{timestamps: true})

const taskModel = mongoose.model("task", taskSchema)

export default taskModel