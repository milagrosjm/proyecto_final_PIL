const API_URL = 'http://localhost:8000/noter/'

export const getNotes = async (username) => {
    return await fetch(API_URL+'notes/'+username+ '/');
};