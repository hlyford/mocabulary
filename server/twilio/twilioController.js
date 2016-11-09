import twilio from 'twilio'
import config from './config';
const client = require('twilio')(config.accountSid, config.authToken);

module.exports = {
	sendResponse: function(phoneNumber, definition, res, callback) {
		console.log('responding back to: ', phoneNumber);
		// send response to the user
	  client.messages.create({
	    body: definition,
	    to: phoneNumber,
	    from: config.sendingNumber,
	    // mediaUrl: 'https://goat-blitz.herokuapp.com/#/quiz?roster=1&quiz_id=gsw'
	  }, function(err, data) {
	    if (err) {
	      console.error('Could not notify administrator');
	      console.error(err);
	    } else {
	      console.log('Administrator notified');
	    }
	  });

		callback();
	}
};