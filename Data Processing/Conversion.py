import csv
import re
import glob

Downloads_Folder = "Data/Download"

Converted_Folder = "Data/Converted"

count = 1

for csvfile in glob.iglob("../"+Downloads_Folder+"/*.csv"):

    sourceFile = open(csvfile, "rU")
    sourceFile_Read = csv.reader(sourceFile)

    outputFile = open("../"+Converted_Folder+"/converted_data_"+str(count)+".csv", "w")
    outputFile_Write = csv.writer(outputFile)
    outputFile_Write.writerow(["time", "percentage", "div_id"])

    first_data = False

    previous_index = 0
    for i in sourceFile_Read:
        for index in xrange(len(i)):
            if "%" in i[index] and index != previous_index:


                # print type(i[index])
                if not first_data:
                    first_data = True

                else:
                    value = []
                    s = i[previous_index].split("%")
                    value.append(s[1])
                    value.append(s[0])
                    value.append(i[(previous_index + 2):index])
                    # print value
                    outputFile_Write.writerow(value)
                previous_index = index
                # print index

    count += 1
# print count
