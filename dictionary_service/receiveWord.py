from flask import Blueprint

receive_word = Blueprint('receive_word', __name__)

@receive_word.route("/")
def accountList(word):
    print 'hihihi' + word
	# lower case the word
	# remove white spaces

	# send the word to wordnik API
	# receive response
	# make an object for the response
		# { word: str, defintion: str, sentence: str, partOfSpeech: str }

	# return object to router

