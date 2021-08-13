from random import randint

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
            
print(runSimulation(100, start_pos=2))

        
