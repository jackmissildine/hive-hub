from app import db


class Nomination(db.Model):
    name = db.Column(db.String, primary_key=True)
    pic_path = db.Column(db.String)
    seconded = db.Column(db.Boolean)
    votes = db.Column(db.Integer)

    def __init__(self, name, pic_path='', seconded=False, votes=0):
        self.name = name
        self.pic_path = pic_path
        self.seconded = seconded
        self.votes = votes

    @property
    def serialize(self):
        return {
            'name': self.name,
            'pic_path': self.pic_path,
            'seconded': self.seconded,
            'votes': self.votes
        }
