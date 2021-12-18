const baseUrl = 'https://server-recipes.herokuapp.com/data';

export const create = async (likeData, token) => {
    
    let response = await fetch(`${baseUrl}/likes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...likeData})
    });

    let result = await response.json();

    return result;

};

export const recipeLikes = async (recipeId) => {

    let response = await fetch(`${baseUrl}/likes?where=recipeId%3D"${recipeId}"`);
    let likes = await response.json();
    let result = Object.values(likes)
    
    return result;

};