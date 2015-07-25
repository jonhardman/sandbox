from imgproc import *

# Create a camera
cam = Camera(320, 240)

# use the camera's width and height to set the viewer size
view = Viewer(cam.width, cam.height, "Blob finding")


# endlessly loop until the user exits
while True:
	  # grab an image from the camera
  image = cam.grabImage()

  # we will put our remaining code in here

  # display the image on the viewer
  view.displayImage(image)