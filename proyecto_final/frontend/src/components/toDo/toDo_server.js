const API_URL = 'http://localhost:8000/noter/'

export const createToDo = async (newTodo) => {
    //console.log(newNote, "hola", newNote.text)
    return await fetch(API_URL+'createToDo/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        mode: 'cors', 
        body: JSON.stringify({
            "tittle": String(newTodo.tittle).trim(),
            "user": String(newTodo.user).trim(),
        })
    });
};

export const createItems = async (newItems, toDo_id) => {
    //console.log(newItems)
    newItems.forEach(async item =>{
        //console.log('entra en el for')
        //console.log(item.text)
        return await fetch(API_URL+'createToDoItem/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            mode: 'cors', 
            body: JSON.stringify({
                "text": String(item.text),
                "checked": Boolean(item.checked),
                "toDo": Number(toDo_id),

            })
        });
    });
};

export const getToDo = async (username) => {
    return await fetch(API_URL+'toDo/'+username+ '/');
};

export const getToDoDetail = async (toDo_id) => {
    return await fetch(API_URL+'toDoDetail/'+toDo_id+ '/');
};

export const getToDoItems = async (toDo_id) => {
    return await fetch(API_URL+'toDoItems/'+toDo_id+ '/');
};

export const deleteToDo = async (toDo) => {
    return await fetch(API_URL+'toDoDetail/'+toDo.id+'/',{
        method: 'DELETE',
    });
};

