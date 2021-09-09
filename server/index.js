const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");

const rateLimit = require("express-rate-limit");
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 60 * 1000, // 1 Hour
  max: 5,
  handler: function(req, res) {
    return res.status(429).json({
      message:
        "Error occured: You cant do that too many times. Wait a few minutes",
    });
  },
});

dotenv.config();

const corsOptions = {
  origin: process.env.VUE_APP_URL,
};
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const mail = require("./routes/mail");

app.use("/api/send-mail", cors(corsOptions), apiRequestLimiter, mail);

app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.VUE_APP_URL}`);
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
