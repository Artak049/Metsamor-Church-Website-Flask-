from datetime import datetime
from ..extensions import db


class DailyWord(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    book = db.Column(db.String(20), nullable=False)
    chapter = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)