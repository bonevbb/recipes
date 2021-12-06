const baseUrl = 'https://server-recipes.herokuapp.com/data';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/recipes`);
    let recipes = await response.json();
    let result = Object.values(recipes);
    
    return result; 
};

export const getOne = async(recipeId) => {
    let response = await fetch(`${baseUrl}/recipes/${recipeId}`);
    let result = await response.json();
    
    return result; 
};

export const getLatest = async () => {
    let response = await fetch(`${baseUrl}/recipes?sortBy=_createdOn%20desc`);
    let recipes = await response.json();
    let result = Object.values(recipes)
    
    return result; 
}

export const create = async (recipeData, token) => {
    
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...recipeData})
    });

    let result = await response.json();

    return result;

};

export const userRecipes = async (userId) => {
    let response = await fetch(`${baseUrl}/recipes?where=_ownerId%3D"${userId}"`);
    let recipes = await response.json();
    let result = Object.values(recipes)
    
    return result; 
}

export const destroy = (recipeId, token) => {

    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());

}