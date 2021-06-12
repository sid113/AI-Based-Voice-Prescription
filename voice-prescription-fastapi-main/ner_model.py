import spacy
from spacy import displacy
import en_core_web_sm
import pprint
from pydantic import BaseModel
import html
from model.data_utils import CoNLLDataset
from model.config import Config
from model.ner_model import NERModel
from model.ner_learner import NERLearner
import sys
import torch, gc
gc.collect()
torch.cuda.empty_cache()


class POS(BaseModel):
	word: str
	entity: str
	entity_loc: str

entity_loc_dict={"B": "BEGIN (first token in multi token entities)" , "I":"INSIDE (middle token in multi token entities)", "O": "OUTSIDE (outside entity)"}

entity_dict={
	'ADE':'ADE value',
	'DOS':' dosage',
	'DRUG':'drug',
	'DUR':'duration',
	'FOR':'form',
	'FRE':'frequency',
	'REA':'reason',
	'ROU':'route',
	'STR':'strength'
}

# colors = {
# "Frquency":"linear-gradient(90deg, #aa9cfc, #fc9ce7)",
# "Form":"#ff6666",
# "ADE":"#ff66ff",
# "Strength":"#ffcc66",
# "Reason":"#ccff66",
# "Duration":"#99ffcc",
# "Dosage":"#66ccff",
# "Route":"#0077b3",
# "Drug":"#b37700",}

# options = {"colors": colors}

async def check_name_entity_recognition(text):
   config = Config()
   model = NERModel(config)
   learn = NERLearner(config, model)
   learn.load()
   pred = learn.predict(text)

   #html1 = displacy.render(pred, style="ent", manual=True, options = options)
   #html1 = html1.replace("\n","")
   #html1 = html1.replace('\"','"')
   
   return pred


async def check_name_entity_recognition_pdf(text):
   config = Config()
   model = NERModel(config)
   learn = NERLearner(config, model)
   learn.load()
   pred=learn.predict_pdf(text)
   return pred


"""
	nlp=en_core_web_sm.load()
	doc=nlp(text)
	i=[(x.text, x.label_) for x in doc.ents]
	ner=[POS(word=str(x), entity_loc=entity_loc_dict[str(x.ent_iob_)], entity=entity_dict[str(x.ent_type_)])]
	return ner
"""
