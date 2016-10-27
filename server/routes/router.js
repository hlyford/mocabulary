import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import request from 'request'

// change to env config later
const pythonUrl = 'http://0.0.0.0:5000/';

let app = require('../server');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.route('/word').get(function(req, res) {
	let word = req.query.word;
	let formData = {word: word};
	console.log(pythonUrl + word);
	request.post({url: pythonUrl + 'word' + '/' + word, formData: formData}, (error, response, body) => {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Show the HTML for the Google homepage.
	    res.send(body);
	  } else {
	  	console.log('error dawg: ', response.statusCode);
	  	res.send('Error with microservice: ', response.statusCode);
	  }
	});
});

// request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
// });

module.exports = router;