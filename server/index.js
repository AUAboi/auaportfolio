const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb-connection-string", (err, client) => {});

dotenv.config();

const corsOptions = {
  origin: process.env.VUE_APP_URL,
};
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const mail = require("./routes/mail");

app.use("/api/send-mail", cors(corsOptions), mail);
app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.VUE_APP_URL}`);
});
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
