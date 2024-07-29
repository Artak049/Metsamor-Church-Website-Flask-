from flask import Flask
from flask_migrate import Migrate

from .extensions import db, migrate
from .config import Config
from .routes.DailyWord import daily_word
from .routes.main import main


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    app.register_blueprint(daily_word)
    app.register_blueprint(main)
    migrate.init_app(app, db)

    db.init_app(app)

    with app.app_context():
        db.create_all()

    return app
