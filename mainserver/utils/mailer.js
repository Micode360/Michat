const nodemailer = require("nodemailer");

const mailer = (mailTitle,options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: {
      name: mailTitle,
      address: process.env.EMAIL_FROM,
    },
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err, "error");
    else console.log(info, "message sent");
  });
};

module.exports = mailer;
