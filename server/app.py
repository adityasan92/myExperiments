import os
import logging
import sys
import PIL
from PIL import Image
from flask import Flask, request
from pprint import pprint
from werkzeug import secure_filename, FileStorage

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['png'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/", methods=['GET','POST'])
def upload_file():
    print >> sys.stderr, 'Hello World'
    print >> sys.stderr, vars(request)
    if request.method == 'POST':
        #sys.stderr.write("Hello World")
        file = request.files['file']
        #pprint (vars(file))
        #sys.stderr.write(request.files['file'])
        print >> sys.stderr, vars( request.files['file'])
        FileStorage(stream=request.files['file']).save(os.path.join(app.config['UPLOAD_FOLDER'],'testpic.jpg'))
        img = Image.open(os.path.join(app.config['UPLOAD_FOLDER'],'testpic.jpg'))
        basewidth = 28
        wpercent = (basewidth/float(img.size[0]))
        hsize = int((float(img.size[1])*float(wpercent)))
        img = img.resize((basewidth,hsize), PIL.Image.ANTIALIAS)
        img.save('sompic.png')
        return "success"


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

if __name__ == "__main__":
    app.run(debug=True)
