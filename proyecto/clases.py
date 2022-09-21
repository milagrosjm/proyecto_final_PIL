import tittles as t

class Item:

    def __init__(self, titulo, descripcion):
        self.name = titulo
        self.description = descripcion
        self.state = None


class Project:

    def __init__(self, name): 
        self.name = name
        self.items = []    

    def listItems(self):
        if len(self.items) == 0:
            print("\n¡Todavia no hay Items!")
        else:
            print(t.items)
            for item in self.items:
                print("N°"+ str(self.items.index(item)+1)+" " + item.name)

    def listItemsByState(self):
        itemsBacklog = []
        itemsToDo = []
        itemsInProgress = []
        itemsComplete = []
        for item in self.items:
            if item.state == None:
                itemsBacklog.append(item)
            elif item.state == "ToDo":
                itemsToDo.append(item)
            elif item.state == "InProgress":
                itemsInProgress.append(item)
            else: 
                itemsComplete.append(item)
        print("BACKLOG")
        for i in itemsBacklog:
            print(item.name)
        print("TO DO")
        for i in itemsToDo:
            print(item.name)



    def addItem(self, item):
        self.items.append(item)

    def deleteItem(self, item):
        self.items.remove(item)

    