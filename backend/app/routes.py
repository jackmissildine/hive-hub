from app import app

@app.route('/')
@app.route('/api')
def api():
    return "Hello World!"


@app.route('/nom')
def nom(restaurant, image):
    lunch = LunchNom(restaurant=restaurant, image_url=image)
    return '%s has been nominated!' % restaurant

@app.route('/second')
def second(lunch_nom):
    if not isinstance(lunch_nom, LunchNom):
        return "Error: not an instance of LunchNom"
    lunch_nom.second()
    return '%s has been seconded!' % lunch_nom.restaurant
