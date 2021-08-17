const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
const mail = require("./routes/mail");

app.use("/api/send-mail", mail);
app.get("/", (req, res) => {
  res.send(process.env.VUE_APP_GMAIL + " " + process.env.VUE_APP_PASSWORD);
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
