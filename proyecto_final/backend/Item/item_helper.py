from Item.models import Item

def itemExists(id):

    try:
        item= Item.objects.get(id=id)

        return [True, item]

    except:

        return [False]