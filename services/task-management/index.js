const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const taskSchema = new mongoose.Schema({
    description: String,
    status: { type: String, enum: ["Pending", "Completed"], default: "Pending" }
});

const Task = mongoose.model("Task", taskSchema);

app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
});

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.status(200).send(tasks);
});

app.put("/tasks/:id", async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(task);
});

app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Task Management Service running on port ${PORT}`));
