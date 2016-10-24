from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello world'

@app.route('/henry')
def stuff():
    return '<div>hihih</div>sss'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')