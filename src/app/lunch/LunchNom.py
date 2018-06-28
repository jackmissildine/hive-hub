class LunchNom(object):

    is_seconded = False
    restaurant = ""
    image_url = ""

    def __init__(self, is_seconded, restaurant, image_url):
        self.is_seconded = is_seconded
        self.restaurant = restaurant
        self.image_url = image_url

    def get_restaurant(self):
        return self.restaurant

    def get_image(self):
        return self.image_url

    def get_is_seconded(self):
        return self.is_seconded

    def set_restaurant(self, new_restaurant):
        self.restaurant = new_restaurant

    def set_image(self, new_image):
        self.image_url = new_image

    def set_is_seconded(self, is_seconded):
        self.is_seconded = is_seconded
