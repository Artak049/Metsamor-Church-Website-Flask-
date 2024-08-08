from flask import Blueprint, render_template, request, redirect
from ..extensions import db
from ..models.Statement import Statement
from .Questions import question_from_user
statement = Blueprint('statement', __name__)


@statement.route('/', methods=['GET', 'POST'])
def show_statement():
    if request.method == 'POST':
        return question_from_user()
    else:
        try:
            statement = Statement.query.order_by('date').all()
            return render_template('main/index.html', statement=statement)
        except:
            return redirect('/admin/create')


@statement.route('/admin/create', methods=['GET', 'POST'])
def statement_admin():
    if request.method == 'POST':
        text = request.form['text']
        statement = Statement(text=text)
        try:
            db.session.add(statement)
            db.session.commit()
            return redirect('/')
        except Exception as e:
            return render_template('admin.html')
    else:
        return render_template('admin.html')