from app import app
from flask import request,db
from nomination import Nomination
import json

'''
Actions to be preformed upon a list of nominations
'''
@app.route('/api/nominations', methods = ['GET', 'POST'])
def nominations():
    if request.method == 'GET':
        return jsonify Nomination.query.all()
