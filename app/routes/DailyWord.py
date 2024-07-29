from flask import Blueprint, render_template
from ..extensions import db
from ..models import DailyWord

daily_word = Blueprint('daily_word', __name__)


@daily_word.route('/admin', methods=['GET', 'POST'])
def daily_word_admin():
    return render_template('admin.html')