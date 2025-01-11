require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const userRoute = require("./routes/userRoute");
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Scribble server listening on port ${PORT}!`)
    );
  })
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoute);
