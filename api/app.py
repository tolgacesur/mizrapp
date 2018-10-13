from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	return 'Hello World!'


if __name__ == '__main__':
	# host : localhost
	# port : 5000 (default)
	app.run(debug=True)