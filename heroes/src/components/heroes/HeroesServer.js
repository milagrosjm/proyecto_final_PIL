// Conexion con la API
const API_URL = 'url'

export const getHeroe = async () => {
    return await fetch(API_URL);
}

export const traerHeroe = [
    {
        id: 1,
        nombre: 'BATMAN',
        edad: '45',
        universo: 2,
    }
];

export const updateHeroe = async () => {
    return await fetch(API_URL);
}

export const listHeroes = async () => {
    return await fetch(API_URL);
}

export const deleteHeroe = async () => {
    return await fetch(API_URL);
}

export const createHeroe = async () => {
    return await fetch(API_URL);
}