import os
import logging
import sys
import PIL
import numpy
from PIL import Image
from flask import Flask, request
from pprint import pprint
from werkzeug import secure_filename, FileStorage

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['png','jpeg'])

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
        FileStorage(stream=request.files['file']).save(os.path.join(app.config['UPLOAD_FOLDER'],'testpic.png'))
        img = Image.open(os.path.join(app.config['UPLOAD_FOLDER'],'testpic.png'))
        img.load()
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3]) # 3 is the alpha channel
        background=background.convert('L')
        #background.save('sompic.jpg', 'JPEG', quality=80)
        basewidth = 28
        wpercent = (basewidth/float(background.size[0]))
        hsize = int((float(background.size[1])*float(wpercent)))
        img = background.resize((basewidth,hsize), PIL.Image.ANTIALIAS)
        img.save('sompic.jpg', 'JPEG')
        # im = numpy.array(img)
        # fft_mag = numpy.abs(numpy.fft.fftshift(numpy.fft.fft2(im)))
        #
        # visual = numpy.log(fft_mag)
        # visual = (visual - visual.min()) / (visual.max() - visual.min())
        #
        # result = Image.fromarray((visual * 255).astype(numpy.uint8))
        # result.save('out.bmp')
        return "success"


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

if __name__ == "__main__":
    app.run(debug=True)
