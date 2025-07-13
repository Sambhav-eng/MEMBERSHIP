const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express(); // ✅ THIS LINE is missing in your file

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,     // secure way 🔐
    pass: process.env.PASSWORD
  }
});

app.post('/submit', (req, res) => {
  const {
    name, organisation, state, zip, country,
    email, mobile, membership_type, amount,
    photo, profile
  } = req.body;

  const message = `
    New Membership Submission:

    Name: ${name}
    Organisation: ${organisation}
    State: ${state}
    Zip: ${zip}
    Country: ${country}
    Email: ${email}
    Mobile: ${mobile}
    Membership Type: ${membership_type}
    Amount: ${amount}
    Photograph: ${photo}
    Profile: ${profile}
  `;

  const mailOptions = {
    from: email,
    to: 'mohitsaxenamohit@gmail.com',
    subject: 'New Life-Time Membership Submission',
    text: message
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Something went wrong!");
    } else {
      res.send(`<h3>Thanks ${name}, your membership request was sent successfully.</h3>`);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
