const API_URL = 'http://localhost:8000/noter/'

export const registerUser = async (newUser) => {
    console.log(newUser, "hola")
    return await fetch(API_URL+'registry/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        mode: 'cors', //
        // headers: [],
        body: JSON.stringify({
            "name": String(newUser.name).trim(),
            "username": String(newUser.username).trim(),
            "lastname": String(newUser.lastname).trim(),
            "email": String(newUser.email).trim(),
            "password": String(newUser.password).trim(),
            "is_active": Boolean(newUser.is_active),
        })
    });
};