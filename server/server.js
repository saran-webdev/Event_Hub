const express = require("express");
const cors = require("cors");
const path = require("path");
const userController = require("./src/controller/user.controller");
/* Don't Remove Import db connection */
const mongoose = require("./src/configs/db");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Router */
app.use("/", userController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}!`);
});
