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
    // let result = Object.values(recipe);
    
    return result; 
    // return fetch(`${baseUrl}/recipes/${recipeId}`)
    //     .then(res => res.json())
};

export const getLatest = async () => {
    let response = await fetch(`${baseUrl}/recipes?sortBy=_createdOn%20desc`);
    let recipes = await response.json();
    let result = Object.values(recipes)
    
    return result; 
}