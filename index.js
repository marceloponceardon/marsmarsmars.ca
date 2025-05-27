const express = require('express')
require('dotenv').config() // .env
const app = express();

// environment variables
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
	res.send('This site is under construction. Please check back later.');
	}
);

app.listen(port, () => {
	console.log(`App listening on http://${host}:${port}`);
	}
);
