from __future__ import print_function
from datetime import datetime
import xml.etree.ElementTree as ET

startTime = datetime.now()


tree = ET.iterparse('morphy-export-20110722.xml')

context = iter(tree)

f = open('words.txt', 'w+')

word_count = 0

for event, elem in context:
    response = ""

    if elem.tag == "lemma":
        if "der" in elem.attrib:
            continue
        if elem.attrib["wkl"] == "SUB" and elem.attrib["kas"] == "NOM" and elem.attrib["num"]=="SIN":
            if elem.attrib['gen'] == 'NEU':
                response = "Das "

            elif elem.attrib['gen'] == 'MAS':
                response = "Der "

            elif elem.attrib['gen'] == 'FEM':
                response = "Die "

            response += elem.text
            print(response.encode('utf-8').strip(), file=f)
            word_count += 1
            continue

print ("%d words printed to file words.txt" % word_count)
print ("running time: ",  datetime.now() - startTime)

f.close()
