from random import randint
import os, math

def getRandom():
    x = randint(0,1)
    return 1 if x == 0 else -1

def runSimulation(repetions : int ,start_pos : int = 0, max_goes = False):
    if not bool(max_goes):
        goesList = []
        for i in range(0, repetions):
            current_pos = start_pos + getRandom()
            goes = 1
            while (current_pos != 0):
                current_pos += getRandom()
                goes += 1
            goesList.append(goes)
        return goesList

def writeToFile(content : list, filename : str):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    xPerLine = 20
    with open(f"{dir_path}/saved runs/{filename}", "a") as file:
        for i in range(0, math.ceil(len(content) / xPerLine)):
                lineToWrite = ''
                for element in content[i * xPerLine : i * xPerLine + xPerLine]:
                    lineToWrite += f' {element}'
                file.write(lineToWrite[1:])    #print(lineToWrite[1:])
                file.write("\n")

def analyseData(filename : str):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    listOflines = None
    with open(f"{dir_path}/saved runs/{filename}", "r") as file:
        stringFile = file.read()
        listOflines = stringFile.split('\n')
    # chose to exit the with block for memory purposes, allows me to close file prior to analyis

    dependentCount = 0
    totalCount = 0
    for line in listOflines[:-1]:
        for sim in line.split(' '):
            totalCount += 1
            if int(sim) == 2:
                dependentCount += 1
    return round(dependentCount / totalCount, 3)


print(analyseData('1D.txt'))

# print(runSimulation(100, start_pos=2))
# writeToFile([1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,2,2,2,2,2,2,2,2,2], 'abcd')

# writeToFile(runSimulation(1000), "1D")



        
