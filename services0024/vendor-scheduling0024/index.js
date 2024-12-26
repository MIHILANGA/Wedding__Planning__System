const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const vendorSchema = new mongoose.Schema({
    name: String,
    service: String,
    contact: String,
    scheduledDate: Date
});

const Vendor = mongoose.model("Vendor", vendorSchema);

app.post("/vendors0024", async (req, res) => {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).send(vendor);
});

app.get("/vendors0024", async (req, res) => {
    const vendors = await Vendor.find();
    res.status(200).send(vendors);
});

app.put("/vendors0024/:id", async (req, res) => {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(vendor);
});

app.delete("/vendors0024/:id", async (req, res) => {
    await Vendor.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Vendor Scheduling Service running on port ${PORT}`));
