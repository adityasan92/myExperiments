import os
from flask import Flask, request
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['png'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/", methods=['GET','POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        print file.filename
        if file and allowed_file(file.filename):
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
            return "success"

if __name__ == "__main__":
    app.run()
