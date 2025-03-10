from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/tasks": {"origins": "*"}})  # Allow all origins

CSV_FILE = "public/data.csv"

def read_tasks():
    df = pd.read_csv(CSV_FILE)
    tasks = {}
    for _, row in df.iterrows():
        category = row['category']
        if category not in tasks:
            tasks[category] = []
        tasks[category].append({
            "text": row['text'],
            "done": row['done']
        })
    return tasks

def save_tasks(tasks):
    df = pd.DataFrame(tasks)
    df.to_csv(CSV_FILE, index=False)  # Save back to CSV

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(read_tasks())

@app.route('/tasks', methods=['PUT'])
def update_tasks():
    tasks = request.json
    save_tasks(tasks)
    return jsonify({"message": "Tasks updated successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
