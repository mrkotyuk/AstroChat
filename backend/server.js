import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

//Middlewares
app.use(express.json());
app.use(cookieParser());

// API routers
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

// Getting statics
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
