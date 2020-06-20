const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

//dot env
const dotenv = require('dotenv');
dotenv.config();
//console.log(process.env.API_KEY)
//OR process.env['your key']

const app = express()

/* Dependences */
const bodyParser = require( 'body-parser' );

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require( 'cors' );
app.use( cors() );


app.use(express.static('dist'))

//console.log(__dirname)

//text Api
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: process.env['API_ID'],
    application_key: process.env['API_KEY']
} );

const getText = ( req, res ) => {
    const text = req.body.text
    textapi.sentiment({
        'text': text
        }, function(error, response) {
        if (error === null) {
            res.send(response)

        } else
        {
            res.send(null)
        }
    });  
}

app.get('/', (req, res) => {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
app.get( '/getText', (req, res) => {
    res.send(mockAPIResponse)
})
app.post( '/test', getText )

// designates what port the app will listen to for incoming requests
app.listen( 8081, () => {
    console.log('app listening on port 8081!')
})



