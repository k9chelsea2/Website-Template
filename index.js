const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("templates"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/pages/index.html');
});

app.post('/contact', (req, res) => {
	const smptTrans = nodemailer.createTransport({
		host: 'smpt.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: GMAIL_USER,
			pass: GMAIL_PASS
		}
	})

	const mailOpts = {
		from: 'Your sender info here',
		to: GMAIL_USER,
		subject: 'New message from repl.co',
		text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
	}
	smptTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			res.render('contact-failure')
		}
		else {
			res.render('contact-success')
		}
	})
})

app.listen(3000, () => {
  console.log('Server up and running');
});