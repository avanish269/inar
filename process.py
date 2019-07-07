import numpy as np
import urllib
import cv2

def imgprc():
    url_response = urllib.urlopen('insert url here');
    img_array = np.array(bytearray(url_response.read()), dtype=np.uint8);
    return img_array;

imgprc()
