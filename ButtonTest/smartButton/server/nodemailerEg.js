const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ame494test@gmail.com',
    pass: 'Testing123#' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'ame494test@gmail.com',
  to: 'ame494test@gmail.com',
  subject: 'test',
  text: 'testing.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
