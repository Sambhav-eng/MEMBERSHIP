const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, 'IIFARD/Pages/Membership-Form/public')));

// ✅ Middleware for static files and form parsing
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Set up multer storage (in-memory, no disk storage needed)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ Setup Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,     // Your Gmail
    pass: process.env.PASSWORD   // Gmail App Password
  }
});

// ✅ POST route to handle form submission with 2 file uploads
app.post("/submit", upload.fields([
  { name: "Resume", maxCount: 1 },
  { name: "Photo", maxCount: 1 }
]), (req, res) => {
  const {
    name, organisation, state, zip, country,
    email, mobile, membership_type, amount,
    profile
  } = req.body;

  // ✅ Grab files
  const resume = req.files['Resume']?.[0];
  const photo = req.files['Photo']?.[0];

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
    Profile: ${profile}
  `;

  // ✅ Create attachment array
  const attachments = [];
  if (resume) {
    attachments.push({
      filename: resume.originalname,
      content: resume.buffer
    });
  }
  if (photo) {
    attachments.push({
      filename: photo.originalname,
      content: photo.buffer
    });
  }

  // ✅ Email config
  const mailOptions = {
    from: process.env.EMAIL,
    to: "trustforacademic@gmail.com",
    subject: "New Life-Time Membership Submission",
    text: message,
    attachments: attachments
  };

  // ✅ Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Email send error:", error);
      res.send("❌ Something went wrong while sending the email.");
    } else {
      console.log("✅ Email sent:", info.response);
      res.send(`<h3>Thanks ${name}, your membership request was sent successfully.</h3>`);
    }
  });
});

// ✅ Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});