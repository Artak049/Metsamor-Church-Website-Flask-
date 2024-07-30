from flask import Blueprint, render_template, request, redirect
from ..extensions import db
from ..models.DailyWord import DailyWord

daily_word = Blueprint('daily_word', __name__)


@daily_word.route('/admin/create', methods=['GET', 'POST'])
def daily_word_admin():
    if request.method == 'POST':
        book = request.form['book-name']
        chapter = request.form['chapter']

        daily_word = DailyWord(book=book, chapter=chapter)

        try:
            db.session.add(daily_word)
            db.session.commit()
            return redirect('/')
        except Exception as e:
            print(e)
    else:
        return render_template('admin.html')