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
arr = np.reshape(arr,(784,1))
arr = np.asfarray(arr, dtype='float32')
arr = arr - 255
arr = arr * -1
arr = arr/255
arr = arr + 0.00000000001
print arr
# arr = -1*np.array(arr)
arr = np.reshape(arr,(28,28))
arr = 255*np.array(arr)
arr = np.uint8(arr)
img = Image.fromarray(arr)
img.save('random.jpg')

# print arr
# arr = np.array(background)
# print arr
#background.save('foo.jpg', 'JPEG', quality=80)
