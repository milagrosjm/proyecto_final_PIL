const API_URL = 'http://localhost:8000/noter/'

export const deleteUser = async (username) => {
    return await fetch(API_URL+'user/'+username,{
        method: 'DELETE',
    });
};