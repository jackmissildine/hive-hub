import json
from flask import Flask, requests

app = Flask(__name__)

@app.route('/api')
def hello():
    return 'Hello, World!'
