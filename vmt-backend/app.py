from flask import Flask, request, jsonify, send_from_directory
from flask_pymongo import PyMongo
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="frontend/build", static_url_path='')
CORS(app, resources={r"/*": {"origins": "*"}})

app.config["MONGO_URI"] = "mongodb+srv://apanwar:Qwerty123@vmt-db-cluster.gnvxm.mongodb.net/vmt_db?retryWrites=true&w=majority&appName=vmt-db-cluster"
mongo = PyMongo(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/add_record', methods=['POST'])
def add_record():
    data = request.get_json()
    mongo.db.maintenance.insert_one(data)
    return jsonify({'message': 'Record added successfully'}), 201

@app.route('/get_records', methods=['GET'])
def get_records():
    records = mongo.db.maintenance.find()
    record_list = [{'vehicleName': rec['vehicleName'],
                    'vehicleModel': rec['vehicleModel'],
                    'maintenanceDate': rec['maintenanceDate'],
                    'maintenanceType': rec['maintenanceType'],
                    'trip': rec['trip']} for rec in records]
    return jsonify(record_list)

# Serve other static files (e.g., CSS, JS) in production
@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
