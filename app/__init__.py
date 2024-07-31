from flask import Flask
from flask_migrate import Migrate

from .extensions import db, migrate
from .config import Config
from .routes.DailyWord import daily_word


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    app.register_blueprint(daily_word)

    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        db.create_all()

    return app
