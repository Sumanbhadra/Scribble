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

  // Listen for room join requests
  socket.on("joinRoom", (id) => {

    if (!id) {
      return console.error("Room ID is required to join.");
    }

    socket.join(id); // Join the specified room
    socket.roomID = id; // Store the room ID in the socket instance
    console.log(`User ${socket.id} joined room: ${id}`);
  });

  // Listen for messages and emit them to the specific room
  socket.on("send_message", (messageData) => {
    if (socket.roomID) {
      // Ensure the socket is associated with a room
      socket.to(socket.roomID).emit("receive_message", messageData);
      console.log(`Message sent to room ${socket.roomID}: ${messageData}`);
    } else {
      console.error(
        `Socket ${socket.id} tried to send a message without joining a room.`
      );
    }
  });
});

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

//getting roomid from frontend
app.post("/api/room", (req, res) => {
  const { id } = req.body;
  console.log("Received Room ID:", id);
  res.status(200).send({ message: "Room ID received successfully" });
});
