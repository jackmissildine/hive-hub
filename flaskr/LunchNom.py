class LunchNom(object):

    is_seconded = False
    restaurant = ""
    image_url = ""

    def __init__(self, restaurant, image_url, is_seconded):
        self.restaurant = restaurant
        self.image_url = image_url
        self.is_seconded = is_seconded
