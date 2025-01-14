# ./my-env/bin/python ./src/gemini-list-models.py

import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


print("List of models that support generateContent:\n")
for m in genai.list_models():
    if "generateContent" in m.supported_generation_methods:
        print(m.name)

print("List of models that support embedContent:\n")
for m in genai.list_models():
    if "embedContent" in m.supported_generation_methods:
        print(m.name)
