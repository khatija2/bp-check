const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const expressSession = require('express-session');
var flash = require('connect-flash');;

require('dotenv').config({ path: './.env' });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(expressSession({
		secret: process.env.ES_SECRET,
		resave: false,
		saveUninitialized: false
		}));

app.use(flash());

app.use((req, res, next) => {
	res.locals.errorMessage = req.flash("error");
	res.locals.successMessage = req.flash("success");
	next();
})


app.get("/", (req, res) => {
	res.render('index.ejs');
});

app.get("/survey", (req, res) => {
	res.render('survey.ejs');
});

const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});


		
		const sendEmail = async (email, subject, text, data) => {
    try {
		const accessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: process.env.EMAIL,
				clientId: process.env.CLIENT_ID,
				clientSecret: process.env.CLIENT_SECRET,
				refreshToken: process.env.REFRESH_TOKEN,
				accessToken: accessToken
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text,
			html: data
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};


app.post("/survey", async (req, res) => {
const formInfo = {
	name: req.body.name,
	systolic: req.body.systolic,
	diastolic: req.body.diastolic,
	useful: req.body.useful,
	useless: req.body.useless,
	info: req.body.info,
	satisfied: req.body.satisfied,
	dissatisfied: req.body.dissatisfied,
	service: req.body.service
	}

try {
	
	const data = await ejs.renderFile("views/test.ejs", {formInfo});
	
	sendEmail('khatija.cwh@gmail.com', 'BP app feedback', 'New Survey', data)

	req.flash("success", "Form Submitted!");
	res.redirect("/")
} catch (err) {
	console.log(err)
	req.flash("error", "Error Submitting Form!");
	res.redirect("/survey")
}
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Listening on port 3000");
});



