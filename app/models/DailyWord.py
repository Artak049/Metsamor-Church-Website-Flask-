from datetime import datetime
from ..extensions import db


class DailyWord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    book = db.Column(db.String(20), nullable=False)
    chapter = db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
