# AI-Based Voice Prescription 
## Introduction 
The unreadability of the doctor's handwriting on medical prescriptions is a prevalent problem. Even the pharmacists who must administer the dispensation of medicines prescribed for patients face problems while reading the clinical notes that are written illegibly. This results in many mistakes since the medications are misinterpreted. Also, this traditional method of recording and maintaining prescriptions causes inconvenience to patients as well as doctors. Writing prescriptions by hand also takes time which leads to doctors attending fewer patients in the scheduled time. A possible way to resolve this problem would be a system that can generate electronic medical.
Here, we propose a system that can generate the formatted prescriptions from the doctor's dictation using suitable NLP techniques.

## Proposed System 

<img src="https://github.com/disha2000/AI-Based-Voice-Prescription-/blob/master/assets/architecture.png" width="900" height="400" />

As shown in the diagram We provide registration and login option to the doctor. During registration, it takes a doctor's Personal information and stores it into the database. All information of the doctor is stored in plain text format except passwords are stored as hash instead of the original input for security purposes. At the time of login, it takes the email id and password from the doctor and checks whether it is valid or not by doing authentication.
If the doctor is authenticated successfully then Doctor can record the prescription in his voice and Google Speech Recognition API will convert the speech into text. Converted text will then sent to the Bilstm-CRF NER (Named Entity Recognition) model which is deployed on REST API using FAST API. Which will first perform some preprocessing tasks like tokenization and word limits. Then the model will do further extractions of entities from text such as  Drug, Dosage, Symptoms, Strength, Form, Frequency, Duration, Route, or other. Where each of the words in the text is classified into one of these entities. 
The model output is then sent back to the application in JSON format. The application then generates a medical prescription using the model output which is then verified by a doctor and sent to the patient via MAIL.



## Getting Started

### Technology Stack Used 

* Python 3.6
* Pytorch
* NLTK
* Scispacy
* MERN Stack 
* Fast API
* JWT (JSON Web Token)
* Google API (Speech to Text)
* HTML,&nbsp;CSS,&nbsp;BOOTSTRAP

### Setting up the project 
* Start by cloning the project with the command:
```
$ https://github.com/sid113/AI-Based-Voice-Prescription/tree/master
```

* Installing the dependencies for both Express and React 
```
$ cd cd mern_auth-front/
$ npm install
$ cd login_backend/
$ npm install

```
Let's first check to see what our React frontend looks like.



* To run the React server use the command in client directory:

```
$ npm start
```

* Now if you go to http://localhost:3000 you will able to see homepage of prescription.ai

We are not running our backend yet! Let's do that now.
* In another terminal session run the command 
```
$ nodemon index.js 
```
* We have two servers running, one for the React frontend and one for the Express backend.
* Now let's run our NER model by running following command.
```
$ cd voice-prescription-fastapi-main/
$ python -m uvicorn main:app --reload
```

## Demonstration Video
<img src="https://github.com/disha2000/AI-Based-Voice-Prescription-/blob/master/assets/demo%20gif.gif" width="800" height="500" />



## Authors

Contributors names and contact info

* Siddhesh Pawar:&nbsp;siddeshpawar03@gmail.com <br>
* Disha Doshi:&nbsp;dishadoshi555@gmail.com



