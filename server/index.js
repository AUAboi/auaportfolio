const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");

const corsOptions = {
  origin: process.env.VUE_APP_URL,
  optionsSuccessStatus: 200,
};

dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
//routes
const mail = require("./routes/mail");

app.use("/api/send-mail", mail);
app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.VUE_APP_URL}`);
});
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
