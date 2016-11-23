from flask import Flask
from flask import request
# from receiveWord import receive_word
from wordnik import *
# client connection to the Wordnik API
apiUrl = 'http://api.wordnik.com/v4'
apiKey = 'YOUR API KEY HERE'
client = swagger.ApiClient(apiKey, apiUrl)

# connect to word defining
wordApi = WordApi.WordApi(client)
example = wordApi.getTopExample('irony')
print example.text

app = Flask(__name__)

# app.register_blueprint(receive_word)

# ------- API routes
@app.route('/')
def index():
    return 'Hello world'

@app.route('/word/<word>', methods=['GET', 'POST'])
def word(word):

		# send the word to the controller 'receiveWord'
		# response = receiveWord(word)
		# return response
		return word

# ------- end API routes

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')