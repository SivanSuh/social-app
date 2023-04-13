const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("merjhada");
});

app.listen(port, () => console.log(`${port} port running`));
