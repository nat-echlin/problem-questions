from random import randint
import os

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
    with open(f"{dir_path}/saved runs/{filename}", "a") as file:
        for element in list:
            


print(runSimulation(100, start_pos=2))

        
