from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello world'

@app.route('/word/<word>', methods=['GET', 'POST'])
def word():
		print 'Calling off to Twilio API...'
    # return 'Calling off to Twilio API...'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')