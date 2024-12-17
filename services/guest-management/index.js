const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const guestSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    rsvp: { type: String, enum: ["Pending", "Accepted", "Declined"], default: "Pending" }
});

const Guest = mongoose.model("Guest", guestSchema);

app.post("/guests", async (req, res) => {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).send(guest);
});

app.get("/guests", async (req, res) => {
    const guests = await Guest.find();
    res.status(200).send(guests);
});

app.put("/guests/:id", async (req, res) => {
    const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(guest);
});

app.delete("/guests/:id", async (req, res) => {
    await Guest.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Guest Management Service running on port ${PORT}`));
