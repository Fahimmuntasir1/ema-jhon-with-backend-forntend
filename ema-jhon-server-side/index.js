const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Jhon bro is waiting for ema bby");
});

app.listen(port, () => {
  console.log("Jhon is waiting on port", port);
});
