from pymongo import MongoClient
import config

# Connect database
# Database name is mizrapp
db = MongoClient(config.db_host, config.db_port).mizrapp
db.authenticate(config.database_user, config.database_pass)