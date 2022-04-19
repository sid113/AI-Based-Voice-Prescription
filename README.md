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
* Frontend Setup 
1. Open the  mern_auth-front folder in your visual studio 
2. Go to terminal and Install dependencies for this project.
    ```
    $ npm install
    ```
3. To run this React project type the following command into the terminal.
    ```
    $ npm start
    ```
4. Now if you go to http://localhost:3000 you will be able to see the homepage of prescription.ai.
* Backend Setup
1. Open the login_backend folder in your separate visual studio.
2. Go to terminal and install dependencies for a backend project.
    ```
    $ npm install
    ```
3. Before running the Backend server make sure that you add a .env file. In this file, add the following variables.
    ```
    MONGODB_CONNECTION_STRING = <Mongodb conenction Uri>
    SECRET=yWbS38U8t9FMQn6uPV
    EMAIL_ID= <email id>
    PASSWORD=<password>
    ```
    To create a MongoDB connection you can refer to this video:<br>
    https://www.youtube.com/watch?v=St0_qSe7RCE&list=PLJM1tXwlGdaf57oUx0rIqSW668Rpo_7oU&index=2&ab_channel=Devistry

4. After completing the above steps Let's run the backend server now.  In the terminal run the following command.
    ```
    $ nodemon index.js 
    ```
* Python Model setup
1. Open the voice-prescription-fastapi-main folder in visual studio or any editor and run the following commands.
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



