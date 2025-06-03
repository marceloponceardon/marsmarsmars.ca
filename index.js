// index.js
const express = require('express')
const ejs = require('ejs')
require('dotenv').config() // .env
const app = express();

// environment variables
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// static files
app.use(express.static('public'))

// ejs
app.set("view engine", "ejs");

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/portfolio', (req, res) => {
	res.render('portfolio');
});

app.get('/resume', (req, res) => {
	res.render('resume');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.listen(port, () => {
	console.log(`App listening on http://${host}:${port}`);
});
