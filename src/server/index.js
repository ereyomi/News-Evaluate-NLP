const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')





//dot env
const dotenv = require('dotenv');
dotenv.config();

//aylien text api
const aylien = require( "aylien_textapi" );
//aylien-news-api
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
} ); 

textapi.sentiment({
  'text': 'John is a very good football player!'
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
} );





const app = express()

/* Dependences */
const bodyParser = require( 'body-parser' );

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require( 'cors' );
app.use( cors() );


app.use(express.static('dist'))

console.log(__dirname)



app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
