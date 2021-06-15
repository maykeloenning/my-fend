// Setup empty JS object to act as endpoint for all routes
projectData = {};

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch')
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config();

const urlToAPI = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + "user input" + "&lang=en"

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(express.static('dist'))

console.log(__dirname)

/*async function fetchResult(){
const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + "user input" + "&lang=en")
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error occured ===> ", error);

        
    }

} */
//fetchResult();

app.post('/add-url', async (req, res) => {
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log (error.message)
    }
})

app.post('/test', async (req, res) => {
    console.log('Server response ----> ', req.body.msg)
})

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

// POST path between MeaningCloud API and this website
app.post('/language', async function(req, res) {
    let data = req.body;
  
    const requestOptions = {
      method: 'POST',
    };
  
    const apiKey = process.env.API_KEY;
    const userInput = data.formText;
    console.log(userInput);
  
  // change "&of=json&url" to "&of=json&txt" to accept user input
    const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key="+apiKey+"&of=json&url="+userInput+"&lang=en", requestOptions)
    try {
      const response = await result.json();
      console.log(response);
      newEntry = {
          sentence: userInput,
          feeling: response.score_tag,
          confidence: response.confidence,
          irony: response.irony
      };
      projectData["entry"] = newEntry;
    }
    catch (error) {
      console.log("error", error);
    }
    console.log(projectData);
    res.send(projectData);
  });
  
  // GET path to update projectData client-side and change the UI
  app.get('/updatePage', function(req, res) {
    res.send(projectData);
    console.log(projectData);
  })