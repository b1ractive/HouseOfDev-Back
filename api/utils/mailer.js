const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kevin.jn99@gmail.com",
    pass: "erhk ixrm cumu uxei",
  },
});

module.exports = transporter;
