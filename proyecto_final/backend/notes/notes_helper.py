from notes.models import Notes

def noteExists(id):

    try:
        note= Notes.objects.get(id=id)

        return [True, note]

    except:

        return [False]