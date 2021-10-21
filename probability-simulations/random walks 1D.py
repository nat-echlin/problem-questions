from random import randint
import os, math

def getRandom():
    x = randint(0,1)
    return 1 if x == 0 else -1

def runSimulation1D(repetitions : int, start_pos : int = 0, max_goes : int = False):
    goesList = []
    if not bool(max_goes):
        for i in range(0, repetitions):
            current_pos = start_pos + getRandom()
            goes = 1
            while (current_pos != 0):
                current_pos += getRandom()
                goes += 1
            goesList.append(goes)
    else:
        for i in range(0, repetitions):
            current_pos = start_pos + getRandom()
            goes = 1
            while (current_pos != 0 and goes < max_goes):
                current_pos += getRandom()
                goes += 1
            if (goes < max_goes):
                goesList.append(goes)
            else:
                goesList.append("STOP")
    return goesList

def runSimulation2D(repetitions : int, start_x : int = 0, start_y : int = 0, max_goes = False):
    goesList = []
    if not bool(max_goes):
        for i in range(0, repetitions):
            current_pos = [start_x, start_y + getRandom()] if getRandom() == 1 else [start_x + getRandom(), start_y]
            goes = 1
            while current_pos != [0,0]:      # while current_pos[0] != 0:        can be used for testing
                getAxis = getRandom()
                if (getAxis == 1):
                    current_pos = [current_pos[0], current_pos[1] + getRandom()]
                else:
                    current_pos = [current_pos[0] + getRandom(), current_pos[1]]
                # above is extremely innefficient, must be a better way of doing it?
                goes += 1
            goesList.append(goes)
    else:
        for i in range(0, repetitions):
            current_pos = [start_x, start_y + getRandom()] if getRandom() == 1 else [start_x + getRandom(), start_y]
            goes = 1
            while (current_pos != [0,0] and goes < max_goes):
                getAxis = getRandom()
                if (getAxis == 1):
                    current_pos = [current_pos[0], current_pos[1] + getRandom()]
                else:
                    current_pos = [current_pos[0] + getRandom(), current_pos[1]]
                goes += 1
            if (goes < max_goes):
                goesList.append(goes)
            else:
                goesList.append("STOP")
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
    # ie incurs slighttt speed reduction to save a shit load of memory

    dependentCount, totalCount, stopCount = (0, 0, 0)
    for line in listOflines[:-1]:
        for sim in line.split(' '):
            if (sim.isdecimal() == True):
                totalCount += 1

                # dependent open

                if int(sim) == 2:
                    dependentCount += 1

                # dependent close

            else:
                stopCount += 1

    return round(f"{dependentCount / totalCount, 3}     [{stopCount} stop(s)]")    # 2nd param(int) is how many digits to round to

if __name__ == "__main__":
    writeToFile(runSimulation2D(1000 , max_goes=10000), "2D.txt")



# print(analyseData('1D.txt'))

# print(runSimulation(100, start_pos=2))
# writeToFile([1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,2,2,2,2,2,2,2,2,2], 'abcd')

# writeToFile(runSimulation1D(10000), "1D.txt")

# print(runSimulation2D(5))



        
