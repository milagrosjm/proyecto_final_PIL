const API_URL = 'http://localhost:8000/noter/'

export const getUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`);
};

export const login = async (user) => {
    return await fetch(API_URL+'login/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: "include",
        body: JSON.stringify({
            "username": String(user.username),
            "password": String(user.password),
        })
    });

};



