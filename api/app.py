from flask import Flask, request, jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
from db import db
import config
import jwt
import hashlib

app = Flask(__name__)

# TODO : All requests inputs are going to validate

@app.route('/login', methods=['POST'])
def login():
	# Convert request to json format
	json = request.get_json()

	# Get user from db
	user = db.users.find_one({'email' :	json.get('email')})

	if user:
		# Check password
		if user['password'] == hashlib.sha256(json.get('password').encode('utf-8')).hexdigest():

			user['_id'] = str(user['_id'])

			token = {
				"_id" : user['_id']
			}

			# Generate token
			user['token'] = jwt.encode(token, config.jwt_secret, algorithm='HS256').decode("utf-8")
			return jsonify(user)
		else :
			return jsonify({'message' : 'Wrong password'}), 400
	else :
		return jsonify({'message' : 'User not found'}), 404


@app.route('/register', methods=['POST'])
def register():
	# Convert request to json format
	json = request.get_json()

	# Get user from db
	user = db.users.find_one({'email' : json.get('email')})

	if user:
		return jsonify({'message' : 'Email exists'}), 409

	# Hash password
	password = hashlib.sha256(json.get('password').encode('utf-8')).hexdigest()

	user = {
		'name' : json.get('name'),
		'email' : json.get('email'),
		'password' : password
	}

	# Save user
	userId = db.users.insert(user)

	token = {
		'_id' : str(userId)
	}

	user['_id'] = str(userId)

	# Generate token
	user['token'] = jwt.encode(token, config.jwt_secret, algorithm='HS256').decode("utf-8")

	return jsonify(user)


@app.route('/api/user/info', methods=['POST'])
def api():

    json = request.get_json()

    info = {
        "user" : ObjectId(json.get('user')),
        "age" : json.get('age'),
        "profession" : json.get('profession'),
        "gender" : json.get('gender'),
        "city" : json.get('city'),
    }

    infoId = db.user_info.insert(info)
    info['_id'] = infoId

    return dumps(info)

@app.route('/api/product/review', methods=['POST'])
def review():

    json = request.get_json()

    review= {
        "product" : json.get('product'),
        "isUsed" : json.get('isUsed'),
        "rank" : json.get('rank'),
        "MinPrice" : json.get('MinPrice'),
        "user" : json.get('user'),
    }

    reviewId = db.reviews.insert(review)

@app.route('/api/users/<string:userId>', methods=['GET'])
def getUser(userId):
	db.users.find_one({'_id' : ObjectId(userId)})

	# Fetch all categories in db
	categories = db.categories.find({})

	# Get all subCategory id of all categories
	subCategoryIds = []
	for category in categories:
		subCategoryIds += categories['subCategories']

	# Fetch all subCategories
	subCategories = db.subCategories.find({"_id" : subCategoryIds})

	# Match categories with their subCategories
	for category in categories:
		listOfSubCategories = []
		for subCategory in subCategories:
			if subCategory['_id'] in category['subCategories']:
				listOfSubCategories.append(subCategory)

		# Assign matched subCategories list to category
		category['subCategories'] = listOfSubCategories

	# Fetch all reviews belong to user
	reviews = db.reviews.find({'user' : ObjectId(userId)})

	# Return response data
	reponse = {
		'categories' : categories,
		'reviews' : reviews
	}

	return response


@app.route('/api/products/<string:subCategoryId>', methods=['GET'])
def getProducts(subCategoryId):

	# Fetch products
	products = db.products.find({'subCategoryId' : ObjectId(subCategoryId)})

	return {
		'products' : products
	}



@app.before_request
def check_auth_token():
	# Dont check token for login and register endpoints
	if request.path in ('/login', '/register'):
			return

	# Get token from request header
	token = request.headers.get('AUTHORIZATION')
	if token is None:
		return jsonify({'message' : 'Invalid Token'})

	token = token.encode('utf-8')

	# Decode and verify token
	try:
		user = jwt.decode(token.decode('utf-8'), config.jwt_secret, algorithms=['HS256'])
		if user:
			return
		else:
			return jsonify({'message' : 'Invalid Token'})
	except:
		return jsonify({'message' : 'Invalid Token'})


if __name__ == '__main__':
	# host : localhost
	# port : 5000 (default)
	app.run(debug=True)