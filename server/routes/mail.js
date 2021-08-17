const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "auawgamers@gmail.com",
    pass: "WhosMe1412",
  },
  secure: true,
});

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  let text = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;
  const mailOptions = {
    from: "auawgamers@gmail.com",
    to: "auawdigital@gmail.com",
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
