var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const textapi = require('./aylienAPI.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// Aylien POST route
app.post('/sentiment-analysis', function (req, res) {
	textapi.sentiment(
		Object.assign(req.body, {mode: 'document'})

		, function(error, response) {
			console.log(response);
			console.log(error);
			console.log('--------------');

			res.send(response);
	});
});