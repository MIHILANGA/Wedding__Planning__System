const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Proxy routes
app.use("/events", createProxyMiddleware({ target: "http://event-service:3001", changeOrigin: true }));
app.use("/guests", createProxyMiddleware({ target: "http://guest-service:3002", changeOrigin: true }));
app.use("/vendors", createProxyMiddleware({ target: "http://vendor-service:3003", changeOrigin: true }));
app.use("/budget", createProxyMiddleware({ target: "http://budget-service:3004", changeOrigin: true }));
app.use("/tasks", createProxyMiddleware({ target: "http://task-service:3005", changeOrigin: true }));
app.use("/notifications", createProxyMiddleware({ target: "http://notification-service:3006", changeOrigin: true }));

const PORT = 8081; // Ensure this matches your docker-compose.yml mapping
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
