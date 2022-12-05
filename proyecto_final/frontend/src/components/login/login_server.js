const API_URL = 'http://localhost:8000/noter/'
//'http://127.0.0.1:8000/heroes/heroes/';
// http://localhost:8000/heroes/heroes/

export const getUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`);
};

export const login = async (username, password) => {
    console.log(username, password,  "hola")
    return await fetch(API_URL+'login/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        mode: 'cors', //
        // headers: [],
        body: JSON.stringify({
            "username": String(username),
            "password": String(password),
        })
    });

};

