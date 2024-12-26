const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS
require("dotenv").config();

const app = express();

// Enable CORS
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema and Model
const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    venue: String,
    type: String,
});

const Event = mongoose.model("Event", eventSchema);

// Endpoints
app.post("/events0024", async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get("/events0024/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).send({ message: "Event not found" });
        }
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.put("/events0024/:id", async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).send({ message: "Event not found" });
        }
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.delete("/events0024/:id", async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).send({ message: "Event not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Event Service running on port ${PORT}`));
