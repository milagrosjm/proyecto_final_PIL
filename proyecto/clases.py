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
        pass

    def addItem(self, item):
        self.items.append(item)

    def deleteItem(self, item):
        self.items.remove(item)

    