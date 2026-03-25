from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Путь к твоей папке с файлами
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def index():
    # Отдаем твой олдскульный .htm файл
    return send_from_directory(BASE_DIR, 'index.htm')

@app.route('/<path:path>')
def static_files(path):
    # Позволяем серверу видеть твой style.css и картинки
    return send_from_directory(BASE_DIR, path)

if __name__ == '__main__':
    print("RuTube 2007 запускается на http://127.0.0.1:5000")
    app.run(debug=True)
