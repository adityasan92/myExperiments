import os
import logging
import sys
import PIL
import numpy as np
from numpy import array
from PIL import Image

# img = Image.open('sompic.png')
# (width, height) = img.size
# print (width, height)
# arr = list(img.getdata())
# arr = np.array(arr)
# print len(arr)
# print arr[0]

# Convert Image to array
jpg = PIL.Image.open("./sompic.jpg")

arr = np.array(jpg)
arr = arr - 255
arr = -1* np.array(arr)
arr = np.uint8(arr)
img = Image.fromarray(arr)
img.save('random.jpg')

# print arr
print arr[1]
# arr = np.array(background)
# print arr
#background.save('foo.jpg', 'JPEG', quality=80)
