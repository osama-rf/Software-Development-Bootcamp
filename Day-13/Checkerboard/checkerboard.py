from flask import Flask , render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html",rows=8 , colums=8)


if __name__ == "__main__":
    app.run(debug=True)