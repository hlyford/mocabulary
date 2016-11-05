from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello world'

@app.route('/word/<word>', methods=['GET', 'POST'])
def word(word):
		print word
		# send the word to the controller 'receiveWord'
		# response = receiveWord(word)
		# return response
		return word

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')