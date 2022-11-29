import nodemailer from "nodemailer";

export const emailMe = (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "zoho",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `${name} wants to contact you!`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).json({message: info.response})
    }
  });
};
