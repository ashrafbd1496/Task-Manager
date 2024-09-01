const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const tasksRouter = require("./routes/tasks");

const app = express();
const port = process.env.PORT || 3000;

// Use environment variable for MongoDB URI
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/taskdb";

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Increase the default size limit for headers (if necessary)
app.use(express.json({ limit: "10mb" })); // Adjust as needed
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// MongoDB connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// API routes
app.use("/tasks", tasksRouter);

// Serve static files from the React app in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
