from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/tasks', methods=['GET'])
def get_tasks():
    df = pd.read_csv('public/data.csv')
    tasks = df.to_dict(orient='records')
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True)