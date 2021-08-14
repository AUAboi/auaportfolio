const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.VUE_APP_GMAIL,
    pass: process.env.VUE_APP_PASSWORD,
  },
  secure: true,
});

router.post("/send-mail", function(req, res) {
  const { to, subject, text } = req.body;
  const mailOptions = {
    from: process.env.VUE_APP_GMAIL,
    to: to,
    subject: subject,
    text: text,
    html:
      "<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>",
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
    }

    res.status(200).send({ message: "sent successfully" });
  });
});

module.exports = router;
