export const getRequest = async (url, list = false) => {

    let response = fetch(url);

    return response.then(result => {
        return responseHandler(result, list);
    });

};

export const postRequest = async (url, data, token) => {

    let response = fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...data})
    });

    return response.then(result => {
        return responseHandler(result);
    });
};

export const putRequest = async (url, data, token) => {

    let response = fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...data})
    });

    return response.then(result => {
        return responseHandler(result);
    });
};

export const deleteRequest = async (url, token) => {

    let response = fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        }
    });

    return response.then(result => {
        return responseHandler(result);
    });
};


async function responseHandler(res, list = false) {

    let jsonData = await res.json();

    if(list)
    {
        jsonData = Object.values(jsonData);
    }

    if (res.ok) {
        return jsonData;
    } else {
        throw jsonData;
    }

};