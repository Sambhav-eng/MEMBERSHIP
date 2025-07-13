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
