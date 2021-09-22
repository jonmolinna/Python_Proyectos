from bson.objectid import ObjectId
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
import uuid

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://localhost/imessage_project'
mongo = PyMongo(app)

CORS(app)

messages = mongo.db.messages

# Creando Rutas
@app.route('/')
def Saludo():
    return jsonify({
        "message": "Hola Mundo desde Python"
    })

# Agregar un Nuevo Grupo
@app.route('/api/message/addGroup', methods=['POST'])
def createGroup():
    user = messages.insert({
        "chatname": request.json['chatname'],
        "imgUrl": request.json['imgUrl'],
    })
    return jsonify({
        "message": "Group Add",
        "id": str(ObjectId(user))
    })

# Agregar un Nuevo Mensaje al Grupo
@app.route('/api/message/addMessage/<idGroup>', methods=['POST'])
def addMessage(idGroup):
    chat = {
        "message": request.json['message'],
        "timestamp": request.json['timestamp'],
        "user": request.json['user'],
        "_id": uuid.uuid4().hex
    }

    messages.update_one(
    {'_id': ObjectId(idGroup)},
    {'$push': {'conversation': chat}})
    return jsonify({
        "message": "Message Add"
    })

# Obtener el ultimo mensaje de cada grupo
@app.route('/api/message/getLastMessageGroups', methods=['GET'])
def getLastMessageGroups():
    groups = []
    for doc in messages.find():
        
        groups.append({
            '_id': str(ObjectId(doc['_id'])),
            'chatname': doc['chatname'],
            'imgUrl': doc['imgUrl'],
            'timestamp': doc['conversation'][len(doc['conversation']) - 1]['timestamp'],
        })
    return jsonify(groups)

# Obtener un Grupo
@app.route('/api/message/getGroup/<idGroup>', methods=['GET'])
def getGroup(idGroup):
    group = messages.find_one({'_id': ObjectId(idGroup)})
    return jsonify({
        '_id': str(ObjectId(group['_id'])),
        'chatname': group['chatname'],
        'imgUrl': group['imgUrl'],
        'conversation': group['conversation']
    })

# Obtener el ultimo message de un grupo
@app.route('/api/message/getLastMessageGroup/<idGroup>', methods=['GET'])
def getLastMessageGroup(idGroup):
    group = messages.find_one({'_id': ObjectId(idGroup)})
    chat = group['conversation'][len(group['conversation']) - 1]
    return jsonify({
        '_id': chat['_id'],
         'user': chat['user'],
         'message': chat['message'],
         'timestamp': chat['timestamp']
    })

# Iniciando Servidor
if __name__ == "__main__":
    app.run(debug=True)