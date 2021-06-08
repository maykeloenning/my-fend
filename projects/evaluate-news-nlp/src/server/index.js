var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch')

dotenv.config();

const urlToAPI = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + "user input" + "&lang=en"

const app = express()

app.use(express.static('dist'))

console.log(__dirname)


const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + "user input" + "&lang=en")
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error occured ===> ", error);

        
    }

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

