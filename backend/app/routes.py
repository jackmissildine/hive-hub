from app import app

@app.route('/')
@app.route('/api')
def api():
    return "Hello World!"
