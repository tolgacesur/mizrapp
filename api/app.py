from flask import Flask
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)

db_host = 'localhost'
db_port = 27017
database_user = 'admin'
database_pass = 'mizrap12345678'

db = MongoClient(db_host, db_port).mizrapp
db.authenticate(database_user, database_pass)

@app.route('/api/users/<string:userId>', methods=['GET'])
def getUser(userId):
	db.users.find_one({"_id" : ObjectId(userId)})

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
	reviews = db.reviews.find({"user" : ObjectId(userId)})

	# Return response data
	reponse = {
		'categories' : categories,
		'reviews' : revies
	}

	return response


@app.route('/api/products/<string:subCategoryId>', methods=['GET'])
def getProducts(subCategoryId):

	products = db.products.find({"subCategoryId" : ObjectId(subCategoryId)})

	return {
		'products' : products
	}


if __name__ == '__main__':
	# host : localhost
	# port : 5000 (default)
	app.run(debug=True)