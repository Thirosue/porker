import csv
import xml.etree.ElementTree as ET
from glob import glob
import pandas as pd
import MeCab

def tocsv(xmlpath, csvwriter):
  x = ET.parse(xmlpath)
  root = x.getroot()
  y = root.find("records").find("record").find("recordData").find("meetingRecord")
  
  date    = y.find("date").text
  session = y.find("session").text
  house   = y.find("nameOfHouse").text
  meeting = y.find("nameOfMeeting").text
  issue   = y.find("issue").text
  for s in y.findall("speechRecord"):
    order   = s.find("speechOrder").text 
    speaker = s.find("speaker").text
    speech  = s.find("speech").text
    csvwriter.writerow([date, session, house, meeting, issue,
      order, speaker, speech, xmlpath])

### csv update?
update_csv = False  

if update_csv:
  print("yay")
  with open("kokkai.csv", "w") as f: 
    csvwriter = csv.writer(f)
    for xmlpath in glob("201[34]/*.xml"):
      y = tocsv(xmlpath, csvwriter)


def fromcsv(csvpath):
  x = pd.read_csv(csvpath, header = None, 
    names = ["date", "session", "house", "meeting", "issue",
             "order", "speaker", "speech", "xmlpath"])
  y = list(x["speech"])
  m = MeCab.Tagger("")
  for s in y:
    print(m.parse(s))
  return(x)

x = fromcsv("kokkai.csv", )
