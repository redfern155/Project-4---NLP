const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const request = require('request')

const app = express();

app.use(express.static('dist'));

const apiKey = process.env.API_KEY;

console.log(__dirname);

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
// const { request } = require('http');
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, () => {
    console.log(`Server is running on localhost: ${port}!`);
})

app.post('/test', (req, res) => {
    const url = req.body.url;
    getSentiment(url, apiKey, (data) => {
        res.send(data);
    });
})

const getSentiment = (url, key, callback) => {
    request(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${url}`, { json: true }, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            callback(body);
        }   else {
            console.log(error);
        }
    });
}