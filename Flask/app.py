
# import requests
# from flask import Flask, request, jsonify
# from stress_user import get_questions, predict
# from depression_user import get_questionsd, predictd
# from anxiety_user import get_questionsa,predicta
# from flask_cors import CORS
# import threading

# app = Flask(__name__)
# CORS(app)

# '''Stress-code'''

# # Endpoint to get questions with options
# @app.route('/questions', methods=['GET'])
# def get_questions_route():
#     questions = get_questions()
#     return jsonify(questions)

# # Endpoint to submit user responses and get predictions
# @app.route('/predict', methods=['POST'])
# def predict_route():
#     try:
#         user_responses = request.json['user_responses']
#         prediction = predict(user_responses)
#         return jsonify(prediction)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# # Testing code
# if __name__ == '__main__':
#     # Run Flask app in a separate thread on port 6000
#     app_thread = threading.Thread(target=app.run, kwargs={'port': 5000})
#     app_thread.start()

#     # Test the /questions endpoint
#     questions_response = requests.get('http://localhost:5000/questions')
#     questions = questions_response.json()
#     print('Received Questions:', questions)

#     # Process the questions and generate user_responses (replace this with your logic)
#     user_responses = [0, 0, 0, 0, 0, 0, 0]

#     # Test the /predict endpoint with user_responses
#     predict_response = requests.post('http://localhost:5000/predict', json={'user_responses': user_responses})
#     prediction = predict_response.json()
#     print('Received Prediction:', prediction)


# '''Depression-code'''

# # Endpoint to get questions with options
# @app.route('/questionsd', methods=['GET'])
# def get_questions_routed():
#     questionsd = get_questionsd()
#     return jsonify(questionsd)

# # Endpoint to submit user responses and get predictions
# @app.route('/predictd', methods=['POST'])
# def predict_routed():
#     try:
#         user_responsesd = request.json['user_responsesd']
#         predictiond = predictd(user_responsesd)
#         return jsonify(predictiond)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# # Testing code
# if __name__ == '__main__':
#     # Run Flask app in a separate thread on port 6000
#     app_thread = threading.Thread(target=app.run, kwargs={'port': 5000})
#     app_thread.start()

#     # Test the /questions endpoint
#     questions_responsed = requests.get('http://localhost:5000/questionsd')
#     questionsd = questions_responsed.json()
#     print('Received Questions:', questionsd)

#     # Process the questions and generate user_responses (replace this with your logic)
#     user_responsesd = [0, 0, 0, 0, 0, 0, 0]

#     # Test the /predict endpoint with user_responses
#     predict_responsed = requests.post('http://localhost:5000/predictd', json={'user_responsesd': user_responsesd})
#     predictiond = predict_responsed.json()
#     print('Received Prediction:', predictiond)


# '''Anxiety-code'''

# # Endpoint to get questions with options
# @app.route('/questionsa', methods=['GET'])
# def get_questions_routea():
#     questionsa = get_questionsa()
#     return jsonify(questionsa)

# # Endpoint to submit user responses and get predictions
# @app.route('/predicta', methods=['POST'])
# def predict_routea():
#     try:
#         user_responsesa = request.json['user_responsesa']
#         predictiona = predicta(user_responsesa)
#         return jsonify(predictiona)
#     except Exception as e:
#         return jsonify({'error': str(e)})

# # Testing code
# if __name__ == '__main__':
#     # Run Flask app in a separate thread on port 6000
#     app_thread = threading.Thread(target=app.run, kwargs={'port': 5000})
#     app_thread.start()

#     # Test the /questions endpoint
#     questions_responsea = requests.get('http://localhost:5000/questionsa')
#     questionsa = questions_responsea.json()
#     print('Received Questions:', questionsa)

#     # Process the questions and generate user_responses (replace this with your logic)
#     user_responsesa = [0, 0, 0, 0, 0, 0, 0]

#     # Test the /predict endpoint with user_responses
#     predict_responsea = requests.post('http://localhost:5000/predicta', json={'user_responsesa': user_responsesa})
#     predictiona = predict_responsea.json()
#     print('Received Prediction:', predictiona)


from flask import Flask, request, jsonify
from flask_cors import CORS
from stress_user import get_questions as get_questions_stress, predict as predict_stress
from depression_user import get_questionsd, predictd
from anxiety_user import get_questionsa, predicta

app = Flask(__name__)
CORS(app)

# Stress-code
@app.route('/questions', methods=['GET'])
def get_questions_route():
    questions = get_questions_stress()
    return jsonify(questions)

@app.route('/predict', methods=['POST'])
def predict_route():
    try:
        user_responses = request.json['user_responses']
        prediction = predict_stress(user_responses)
        return jsonify(prediction)
    except Exception as e:
        return jsonify({'error': str(e)})

# Depression-code
@app.route('/questionsd', methods=['GET'])
def get_questions_routed():
    questionsd = get_questionsd()
    return jsonify(questionsd)

@app.route('/predictd', methods=['POST'])
def predict_routed():
    try:
        user_responsesd = request.json['user_responsesd']
        predictiond = predictd(user_responsesd)
        return jsonify(predictiond)
    except Exception as e:
        return jsonify({'error': str(e)})

# Anxiety-code
@app.route('/questionsa', methods=['GET'])
def get_questions_routea():
    questionsa = get_questionsa()
    return jsonify(questionsa)

@app.route('/predicta', methods=['POST'])
def predict_routea():
    try:
        user_responsesa = request.json['user_responsesa']
        predictiona = predicta(user_responsesa)
        return jsonify(predictiona)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    # Run Flask app on port 5000
    app.run(host='0.0.0.0', port=5000)
