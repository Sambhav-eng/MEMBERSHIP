const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express(); // ✅ initialize app FIRST

// ✅ Serve static files from "public" folder (HTML, CSS)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Setup Gmail transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,     // 🔐 Your Gmail
    pass: process.env.PASSWORD   // 🔐 App password
  }
});

// ✅ Route to handle form submission
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
    from: process.env.EMAIL, // ✅ Use your OWN Gmail
    to: 'mohitsaxenamohit@gmail.com', // ✅ Receiver's Gmail
    subject: 'New Life-Time Membership Submission',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send("❌ Something went wrong while sending the email.");
    } else {
      console.log("✅ Email sent:", info.response);
      res.send(`<h3>Thanks ${name}, your membership request was sent successfully.</h3>`);
    }
  });
});

// ✅ Server listening on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
