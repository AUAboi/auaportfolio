const express = require("express");
const app = express();
const port = 3000;

//routes
const mail = require("./routes/mail");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use("/send-mail", mail);

app.get("/test-node", (req, res) => {
  res.send(res.body);
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
