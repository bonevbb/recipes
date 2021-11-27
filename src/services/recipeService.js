const baseUrl = 'http://localhost:3030/data';

export function getAll() {

    return fetch(`${baseUrl}/recipes?sortBy=_createdOn%20desc`)
        .then(res => res.json())
        
}

export const getOne = (id) => fetch(`${baseUrl}/recipes/${id}`).then(res => res.json());

export const getLatest = () => {

    return fetch(`${baseUrl}/recipes?sortBy=_createdOn%20desc`)
        .then(res => res.json())

}