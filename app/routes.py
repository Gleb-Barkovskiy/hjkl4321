from flask import Blueprint, render_template, request, jsonify
from app import db
from app.models import FormData


bp = Blueprint("main", __name__)

@bp.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        form_data = request.form.to_dict()
        form_entry = FormData(data=form_data)
        db.session.add(form_entry)
        db.session.commit()
        return jsonify({"status": "success"})

    return render_template("index.html")

@bp.route("/view_data")
def view_data():
    data = FormData.query.all()
    return render_template("view_data.html", data=data)

