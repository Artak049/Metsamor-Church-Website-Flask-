import os


class Config(object):
    USER = os.environ.get('MYSQL_USER', 'root')
    PASSWORD = os.environ.get('MYSQL_PASSWORD', 'NewMe2024')
    HOST = os.environ.get('MYSQL_HOST', 'localhost')
    PORT = os.environ.get('MYSQL_PORT', '3306')
    DATABASE = os.environ.get('MYSQL_DB', 'site')
    SQLALCHEMY_DATABASE_URI = f'mysql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}'
    SECRET_KEY = 'qwejuewq'
    SQLALCHEMY_TRACK_MODIFICATIONS = True
