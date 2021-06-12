from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field
from fastapi import FastAPI, Query, Path,Request, Form
from ner_model import check_name_entity_recognition, POS,check_name_entity_recognition_pdf

import json 
from app import *

app = FastAPI()

origins = [
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)	



class Payload(BaseModel):
    data: str = ""


@app.post('/pdf')
async def createPdf(payload: Payload = None):

    print(payload.data)
    pred = await check_name_entity_recognition_pdf(payload.data)
    print(pred)
    # data= {"item" : out }
    # data=json.dumps(data)
    # data = data.encode("utf-8")
  
    # return data;
      
    sent=payload.data;
    wordsList=sent.split();
    predsList = [j for sub in pred for j in sub]
    print(predsList )
    words=[]
    preds=[]

    for i in range(len(predsList)):
        if(predsList[i]!="O"):
            preds.append(predsList[i])
            words.append(wordsList[i])      
    start=0
    inputs=[]
    predictions=[]
    for current in range(len(words)):
        if(preds[current][0]=="B"):
            predictions.append(preds[current])
            inputs.append(" ".join(words[start:current]))
            start=current

    inputs.append(" ".join(words[start:]))
    inputs=inputs[1:]
    tempCounts={"B-DRUG":0,"B-STR":0,"B-FOR":0,"B-ROU":0,"B-DOS":0,"B-FRE":0,"B-DUR":0}
    for i in predictions:
        tempCounts[i]+=1
        totalDrug=max(tempCounts.values())
    data=[]
    for i in range(totalDrug):
        data.append({"B-DRUG":"NA","B-STR":"NA","B-FOR":"NA","B-ROU":"NA","B-DOS":"NA","B-FRE":"NA","B-DUR":"NA"})
    counts={"B-DRUG":0,"B-STR":0,"B-FOR":0,"B-ROU":0,"B-DOS":0,"B-FRE":0,"B-DUR":0}
    for i in range(len(predictions)):
        temp=counts[predictions[i]]
        data[temp][predictions[i]]=inputs[i]
        counts[predictions[i]]+=1
    # data= {"item" : data}
    # data=json.dumps(data)
    # data = data.encode("utf-8")
    return data


@app.post('/data')
async def main(payload: Payload = None):
    print(payload)
    out = await check_name_entity_recognition(payload.data)
    data= {"item" : out }
    data=json.dumps(data)
    data = data.encode("utf-8")
    print(payload)
    return data;

"""
class User(BaseModel):
    Input: str

@app.post('/data')#,response_class=HTMLResponse)
async def main(text: User):
    out = await check_name_entity_recognition(text.Input)
    return out;

"""
