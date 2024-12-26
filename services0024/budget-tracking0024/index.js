const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const budgetSchema = new mongoose.Schema({
    category: String,
    allocatedAmount: Number,
    spentAmount: { type: Number, default: 0 }
});

const Budget = mongoose.model("Budget", budgetSchema);

app.post("/budget0024", async (req, res) => {
    const budget = new Budget(req.body);
    await budget.save();
    res.status(201).send(budget);
});

app.get("/budget0024", async (req, res) => {
    const budgets = await Budget.find();
    res.status(200).send(budgets);
});

app.put("/budget0024/:id", async (req, res) => {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(budget);
});

app.delete("/budget0024/:id", async (req, res) => {
    await Budget.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Budget Tracking Service running on port ${PORT}`));
