from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/buy_1")
def buy_1():
    return render_template("buy_1.html")

@app.route("/buy_2")
def buy_2():
    return render_template("buy_2.html")

@app.route("/buy_3")
def buy_3():
    return render_template("buy_3.html")

@app.route("/buy_4")
def buy_4():
    return render_template("buy_4.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")

@app.route("/contact")
def contact():     
    return render_template("contact.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/payment")
def payment():
    return render_template("payment.html")

@app.route("/address")
def address():
    return render_template("address.html")

if __name__ == "__main__":
    app.run(debug=True)
