const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter.js");
const cors = require("cors");
const cardRouter = require("./routes/cardRouter.js");
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/card", cardRouter);

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("conneted db"))
    .catch((err) => console.log(err));
});
