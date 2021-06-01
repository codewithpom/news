from flask import Flask

app = Flask('app')
@app.route("/")
def hello():
    code = open("index.html").read()
    return code

app.run(host="0.0.0.0", port=8080, debug=True)