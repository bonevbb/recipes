import * as httpClient from './httpClient';

const baseUrl = 'https://server-recipes.herokuapp.com';

export const login = (email, password) => {

    return httpClient.postRequest(`${baseUrl}/users/login`, { email, password });

};

export const register = (email, password) => {

    return httpClient.postRequest(`${baseUrl}/users/register`, { email, password });

};

export const logout = (token) => {

    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    });
    
};