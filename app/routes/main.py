from flask import Blueprint, render_template, request
from ..extensions import db

main = Blueprint('main', __name__)


@main.route('/index')
@main.route('/')
def index():
    return render_template('main/index.html')