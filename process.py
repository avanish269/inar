import numpy as np
import urllib.request
import cv2

def imgprc(stir):
    url_response = urllib.request.urlopen(stir)
    img_array = np.asarray(bytearray(url_response.read()), dtype="uint8")
    img_array = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
    print(img_array.size)
#    cv2.imwrite('color_img.jpg', img_array)
#    cv2.imshow("image", img_array);
#    cv2.waitKey();
    return img_array

#print(imgprc("http://lorrie.cranor.org/blog/wp-content/uploads/2013/04/IMG_2373-pixelated.jpg"))
