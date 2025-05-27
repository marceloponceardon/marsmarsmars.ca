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
	res.sendFile(__dirname + '/views/index.html');
	}
);

app.listen(port, () => {
	console.log(`App listening on http://${host}:${port}`);
	}
);
