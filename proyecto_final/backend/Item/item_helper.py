from Item.models import Item

def itemExists(id):

    try:
        note= Item.objects.get(id=id)

        return [True, note]

    except:

        return [False]