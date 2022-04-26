const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("My first node server");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Your server is running at http://localhost:${PORT}`);
});
