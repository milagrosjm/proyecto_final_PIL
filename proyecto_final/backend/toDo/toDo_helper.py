from toDo.models import toDo

def toDoExists(id):

    try:
        note= toDo.objects.get(id=id)

        return [True, note]

    except:

        return [False]