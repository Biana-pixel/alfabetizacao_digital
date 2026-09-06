from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/modulo/<int:numero>")
def modulo(numero):
    return render_template("modulo.html", numero=numero)


@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


if __name__ == "__main__":
    app.run(debug=True)