from flask import Blueprint, render_template, request, redirect
films = Blueprint('films', __name__)


@films.route('/films', methods=['GET', 'POST'])
def watching_movies():
    if request.method == 'POST':
        pass
    else:
        return render_template('movies.html')
