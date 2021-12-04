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