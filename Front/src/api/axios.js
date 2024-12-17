import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8081", // API Gateway URL
});

export default API;
