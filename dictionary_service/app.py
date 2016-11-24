from flask import Flask
from flask import request
from receiveWord import receive_word
from wordnik import *
# client connection to the Wordnik API
# apiUrl = 'http://api.wordnik.com/v4'
# apiKey = 'YOUR API KEY HERE'
# client = swagger.ApiClient(apiKey, apiUrl)

# # connect to word defining
# wordApi = WordApi.WordApi(client)
# example = wordApi.getTopExample('irony')
# print example.text

app = Flask(__name__)

app.register_blueprint(receive_word)

# ------- API routes
@app.route('/')
def index():
  return 'Hello world'

@app.route('/word/<word>', methods=['GET', 'POST'])
def word(word):
		word = "Smile"
		# lower case the word
		# remove white spaces
		word = word.lower().strip()
		# **** class for making new word objects
		class FinalWordObject(object):
				# word = ""
				# definition = 0
				# partOfSpeech = ""
		    def __init__(self, word="Unknown name", definition=0, partOfSpeech="Unknown major"):
		        self.word = word
		        self.definition = definition
		        self.partOfSpeech = partOfSpeech
		        # self.exampleSentence = exampleSentence

		def make_wordObject(word, definition, partOfSpeech):
		    wordObject = FinalWordObject(word, definition, partOfSpeech)
		    return wordObject

		# send the word to wordnik API and get the
		# definitionResponse = wordApi.getDefinitions(self, word, {limit: 1});
		definitionArray = [{ "textProns": [], "sourceDictionary": "ahd-legacy", "exampleUses": [], "relatedWords": [], "labels": [],"citations": [], "word": "smile","partOfSpeech": "noun", "sequence": "0", "attributionText": "from The American Heritage Dictionary of the English Language, 4th Edition", "text": "A facial expression characterized by an upward curving of the corners of the mouth and indicating pleasure, amusement, or derision.", "score": 0}]
		definitionArray = definitionArray[0]

		# make an object for the response
			# { word: str, defintion: str, sentence: str, partOfSpeech: str }
		finalWordObject = make_wordObject(definitionArray['word'], definitionArray['text'], definitionArray['partOfSpeech'])

		# return response
		return finalWordObject

# ------- 2end API routes

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')