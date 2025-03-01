# Importing Required Modules
from rembg import remove
from PIL import Image
import sys

# Store path of the image in the variable input_path
input_path = sys.argv[1]

# Store path of the output image in the variable output_path
output_path = sys.argv[2] + "-alpha.png"

# Processing the image
input = Image.open(input_path)

# Removing the background from the given Image
output = remove(input)

# Saving the image in the given path
output.save(output_path)
