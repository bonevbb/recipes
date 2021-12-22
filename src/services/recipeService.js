import * as httpClient from './httpClient';
const baseUrl = 'https://server-recipes.herokuapp.com/data';


export const getAll = () => {
    return httpClient.getRequest(`${baseUrl}/recipes`, true);
};

export const getOne = (recipeId) => {
    return httpClient.getRequest(`${baseUrl}/recipes/${recipeId}`);
};

export const getLatest = () => {
    return httpClient.getRequest(`${baseUrl}/recipes?sortBy=_createdOn%20desc`, true);
}

export const create = (recipeData, token) => {
    console.log(recipeData);
    return httpClient.postRequest(`${baseUrl}/recipes`, recipeData, token);
};

export const update = (recipeId, recipeData, token) => {
    return httpClient.putRequest(`${baseUrl}/recipes/${recipeId}`, recipeData, token);
};

export const userRecipes = (userId) => {
    return httpClient.getRequest(`${baseUrl}/recipes?where=_ownerId%3D"${userId}"`, true);
};

export const destroy = (recipeId, token) => {
    return httpClient.deleteRequest(`${baseUrl}/recipes/${recipeId}`, token);
};