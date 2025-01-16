require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoute");
const PORT = process.env.PORT || 3000;

const app = express();

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("send_message", (message) => {
    socket.broadcast.emit("receive_message", message);
  });
})



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(PORT, () =>
      console.log(`Scribble server listening on port ${PORT}!`)
    );
  })
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoute);

