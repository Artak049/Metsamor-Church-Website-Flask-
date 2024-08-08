from ..models.Questions import Questions
from ..extensions import db
from flask import Blueprint, render_template, request, redirect
questions = Blueprint('questions', __name__)


@questions.route('/', methods=['GET', 'POST'])
def question_from_user():
    if request.method == 'POST':
        question = request.form['text']
        questions = Questions(question=question)
        try:
            db.session.add(questions)
            db.session.commit()
            return redirect('/')
        except Exception as e:
            return e
    else:
        return 'asdfwerg'
