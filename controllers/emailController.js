import nodemailer from "nodemailer";
import { validationResult } from "express-validator";

export const emailMe = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "zoho",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: {
      name: name,
      address: process.env.USER_EMAIL,
    },
    to: process.env.EMAIL,
    subject: `${name} wants to contact you!`,
    text: message,
    replyTo: email,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).json({ message: info.response });
    }
  });
};
