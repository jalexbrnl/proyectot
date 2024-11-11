from flask import Flask, request, jsonify
# import cors
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/enviar_datos', methods=['POST'])
def post():
    data = request.json
    respuesta = {
        "datos": "los datos recibidos desde el frontend y retornados desde el backend son",
        "name": data.get('name'),
        "last_name": data.get('last_name'),
        "age": data.get('age')
    }
    # llamado al modelo de IA de Red Neuronal
    
    return jsonify(respuesta)


if __name__ == '__main__':
    app.run(debug=True)