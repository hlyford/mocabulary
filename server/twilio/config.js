var dotenv = require('dotenv');
var cfg = {
	accountSid: 'AC70a7738abef44332dba41e6aafb20c2b',
	authToken: 'd64f230a01771ff7a572dcdc10f9fbe4',
	sendingNumber: '18313594576'
};

// for prod
cfg.accountSid = 'ACc9b44f88ab422de968588d4448edeeba';
cfg.authToken = 'a8edd8598b9c0158278c2e9b2203bc88';

module.exports = cfg;
/*
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  dotenv.config({path: '.env'});
} else {
  dotenv.config({path: '.env.test', silent: true});
}
*/

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.

// cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
// cfg.authToken = process.env.TWILIO_AUTH_TOKEN;
// cfg.sendingNumber = process.env.TWILIO_NUMBER;

var requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber];
var isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

if (!isConfigured) {
  var errorMessage = 'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.';

  throw new Error(errorMessage);
}