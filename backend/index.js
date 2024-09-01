const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToDatabase = require("./db"); // Import the db connection

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Connect to MongoDB before handling requests
connectToDatabase()
  .then(() => {
    const tasksRouter = require("./routes/tasks");
    app.use("/tasks", tasksRouter);

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../frontend/build")));

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
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
