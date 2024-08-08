from flask import Flask

from .extensions import db, migrate
from .config import Config
from .routes.Statement import statement
from .routes.Questions import questions
from .routes.Films import films


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    app.register_blueprint(statement)
    app.register_blueprint(questions)
    app.register_blueprint(films)

    db.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        db.create_all()

    return app
