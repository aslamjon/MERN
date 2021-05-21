import os

def openFile(folder,afterDot = 'py', howMuch=1):
    for fileNumber in range(1,howMuch+1):
        txt = open(f"{folder}/task{fileNumber}.{afterDot}",'w') # a = append, w = write, r = read
        
        # txt.writelines(['Ashur','\nFirdavs'])
        # txt.write("arrow = (a, b) => a * b;")
        txt.write("function task(a){\n    return a; \n}\nconsole.log(task(25));")

        txt.close()

# Create function for creating folder and a file
def createFolderAndFile(folder, typeOfFile = 'py'):
    def forMultiple():
        creator = open(f'{folder}/task.{typeOfFile}', 'a')
        if typeOfFile == 'py':
            creator.write("def task(a):\n    return a\n\n    print(task())")
        elif typeOfFile == 'js':
            creator.write("\
// This file create with python file\n\
function task(a){\n\
    return a; \n\
}\n\
console.log(task(25));")
        creator.close()
    
    try:
        forMultiple()
    except FileNotFoundError:
        os.mkdir(folder)
        forMultiple()

# function runer

# openFile('lesson 9/Funksiyaga oid soda masalalar', 'js',25)
createFolderAndFile('lesson 11','js')
