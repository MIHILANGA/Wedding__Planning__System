const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Proxy routes
app.use(
    "/events0024",
    createProxyMiddleware({
        target: "http://event-service:3001", // Use Docker service name, NOT localhost
        changeOrigin: true,
    })
);

app.use(
    "/guests0024",
    createProxyMiddleware({
        target: "http://guest-service:3002",
        changeOrigin: true,
    })
);

app.use(
    "/vendors0024",
    createProxyMiddleware({
        target: "http://vendor-service:3003",
        changeOrigin: true,
    })
);

app.use(
    "/budget0024",
    createProxyMiddleware({
        target: "http://budget-service:3004",
        changeOrigin: true,
    })
);

app.use(
    "/tasks0024",
    createProxyMiddleware({
        target: "http://task-service:3005",
        changeOrigin: true,
    })
);

app.use(
    "/notifications0024",
    createProxyMiddleware({
        target: "http://notification-service:3006",
        changeOrigin: true,
    })
);

const PORT = 8080; // API Gateway internal port
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
