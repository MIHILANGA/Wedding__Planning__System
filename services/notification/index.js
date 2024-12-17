const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/notifications", (req, res) => {
    console.log("Notification sent:", req.body);
    res.status(200).send("Notification sent!");
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
