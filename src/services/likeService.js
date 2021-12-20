import * as httpClient from './httpClient';

const baseUrl = 'https://server-recipes.herokuapp.com/data';

export const create = (likeData, token) => {

    return httpClient.postRequest(`${baseUrl}/likes`, likeData, token);

};

export const recipeLikes = (recipeId) => {

    return httpClient.getRequest(`${baseUrl}/likes?where=recipeId%3D"${recipeId}"`, true); 

};

export const destroy = async (likeId, token) => {

    return httpClient.deleteRequest(`${baseUrl}/likes/${likeId}`, token);
    
};