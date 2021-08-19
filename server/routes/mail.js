const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.mailgun.org",
  auth: {
    user: process.env.VUE_APP_GMAIL,
    pass: process.env.VUE_APP_PASSWORD,
  },
});

router.post("/", (req, res) => {
  const { name, email, message, bot } = req.body;
  if (bot) {
    return;
  }
  let text = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;
  const mailOptions = {
    from: process.env.VUE_APP_GMAIL,
    to: process.env.VUE_APP_PERSONAL_EMAIL,
    subject: "Mail from portfolio site!",
    text: text,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      res.send({ message: `Error occured: ${err}` });
    }

    res.status(200).send({ message: "Sent successfully" });
  });
});

module.exports = router;
