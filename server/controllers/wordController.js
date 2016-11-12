const User = require('../models/userModel.js');
const Word = require('../models/wordModel');

//syncs up sequelize with the database; i don't really know what this does >_<
// User.sync(); Word.sync();

module.exports = {

	receiveWord: function(wordObject, phoneNumber) {
		// check if the phone number is already in the system
		return User.findAll({
		    where: {
		      phone_number: phoneNumber
		    }
		  })
			// no, call on the user Model to create a new user
		  .then((response) => {
		    //if username already exist reponse.length will be > 0
		    if(response.length){
		      console.log('User has been created before');
		      return this.addWord(wordObject, phoneNumber);
		    } else {
		      return User.create({
		        phone_number: phoneNumber
		      })
		      .then((response) => {
		        console.log('RESPONSE IN USER CREATION', response.dataValues.id);
		        return this.addWord(wordObject, phoneNumber);
		      });
		    }
		});
	},

	addWord: function (wordObject, phoneNumber) {

		return Word.findAll({
			where: {
				phone_number: phoneNumber,
				word: wordObject.word
			}
		})
		.then((response) => {
			console.log(response.length);
	    if (response.length) {
	      console.log('User has looked up that word before');
	    } else {
	    	console.log('added user and word');
	    	Word.create({
	    		phone_number: phoneNumber,
	    		word: wordObject.word
	    	})
		  }
		});
	}

};

module.exports.receiveWord({word: 'butts420', definition: 'lul'}, '4211');