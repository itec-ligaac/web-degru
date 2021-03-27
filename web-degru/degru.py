from flask import Flask,render_template, send_from_directory
app = Flask(__name__)

# ######################
# routes and other stuff
# ######################

@app.route('/login')
def hello_world():
    return render_template("login.html")

@app.route("/signup")
def signup_serve():
    return render_template("SignUp.html")

@app.route('/statics/<path:path>')
def send_js(path):
    return send_from_directory('statics', path)


app.run(host = "0.0.0.0", port=8000, debug=True)