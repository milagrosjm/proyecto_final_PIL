/* eslint-disable no-sequences */
const API_URL = 'http://localhost:8000/noter/'

export const getNote = async (id) => {
    return await fetch(API_URL+'note/'+id+ '/');
};

export const updateNote = async (note) => {
    return await fetch(API_URL+'note/'+note.id+'/',{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": Number(note.id),
            "tittle": String(note.tittle),
            "text": String(note.text),
            "type": Number(note.type),
            "user": String(note.user)
        })

    });
};

export const createNote = async (newNote) => {
    //console.log(newNote, "hola", newNote.text)
    return await fetch(API_URL+'createNote/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        mode: 'cors', //
        body: JSON.stringify({
            "tittle": String(newNote.tittle).trim(),
            "text": String(newNote.text).trim(),
            "type": Number(newNote.type),
            "user": String(newNote.user).trim()
        })
    });
};

export const getNotes = async (username) => {
    return await fetch(API_URL+'notes/'+username+ '/');
};

export const deleteNote = async (note) => {
    return await fetch(API_URL+'note/'+note.id+'/',{
        method: 'DELETE',
    });
};