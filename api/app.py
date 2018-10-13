from flask import Flask
from pymongo import MongoClient()
from bson.objectid import ObjectId

app = Flask(__name__)
db = MongoClient().mizrapp

@app.route('/', methods=['GET'])
def index():
	return 'Hello World!'


if __name__ == '__main__':
	# host : localhost
	# port : 5000 (default)
	app.run(debug=True)