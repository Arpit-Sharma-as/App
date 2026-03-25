const express = require("express");
const path = require("path");

const app = express();

const VERSION = "v1.0.0"; // we will change this later

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.json({
    message: "🔥 Backend is working perfectly!",
    version: VERSION
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
