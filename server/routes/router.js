import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import request from 'request'
import twilioController from '../twilio/twilioController'
import wordController from '../controllers/wordController'

// change to env config later
const pythonUrl = 'http://0.0.0.0:5000/';

let app = require('../server');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.route('/').get( (req, res) => {
	res.send('hello world!');
});

router.route('/word/').get(function(req, res) {
	let word = req.query.Body, phoneNumber = req.query.From;
	let formData = {word: word};
	// TO DO LATER: SEE IF WE ALREADY HAVE THE WORD IN THE DB!
		// YES, SKIP THE PYTHON STUFF

	// send to python microservice
	request.post({url: pythonUrl + 'word' + '/' + word, formData: formData}, (error, response, body) => {
	  if (!error && response.statusCode == 200) {
	    twilioController.sendResponse(phoneNumber, body, res, () =>{
	    	// body = { word: word, defitnion: defintion, part_of_speech: , sentence: sentence }
	    	// send user phone number and word to wordController
	    	wordController.receiveWord(body, phoneNumber);
	    	res.send('first of all id like to thank my connect');
	    });
	  } else {
	  	console.log('error dawg: ', response.statusCode);
	  	res.send('Error with microservice: ', response.statusCode);
	  }
	});

});

module.exports = router;