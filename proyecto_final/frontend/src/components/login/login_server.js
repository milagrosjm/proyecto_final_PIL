const API_URL = 'http://localhost:8000/heroes/heroes/'
//'http://127.0.0.1:8000/heroes/heroes/';
// http://localhost:8000/heroes/heroes/

export const getUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`);
};