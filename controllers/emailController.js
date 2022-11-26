import nodemailer from "nodemailer";

export const emailMe = (req, res) => {
  const transpoter = nodemailer.createTransporter({
  	service: "yahoo", 
  	auth: {
  		user: process.env.EMAIL,
  		pass: process.env.PASS
  	}
  });
};
