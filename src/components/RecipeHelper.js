
export const nameValidation = (currentName) => {
    let error = false;

    if (currentName.length === 0) {
        error = 'This field is required!';
    }
    else if (currentName.length < 3) {
        error = 'Your name sould be at least 3 characters!';
    } else if (currentName.length > 50) {
        error = 'Your name sould be max 10 characters!';
    }

    return error;
}

export const descriptionValidation = (currentDescription) => {
    let error = false;

    if (currentDescription.length === 0) {
        error = 'This field is required!';
    }
    else if (currentDescription.length < 10) {
        error = 'Your description should be at least 10 characters!';
    } else if (currentDescription.length > 255) {
        error = 'Your description should be max 255 characters!';
    }

    return error;
}

export const imgUrlValidation = (url) => {

    let error = false;

    let arr = [ "jpeg", "jpg", "gif", "png" ];
    let ext = url.substring(url.lastIndexOf(".")+1);

    if (url.length === 0) {
        error = 'This field is required!';
    }
    else if(!arr.includes(ext)){
        error = 'Invalid an image extension!';
    }

    return error;
    
}

export const ingredientValidation = (ingredient) => {

    let error = false;

    if (ingredient.length === 0) {
        error = 'This field is required!';
    }
    else if(ingredient.length < 4){
        error = 'Your ingredient should be at least 4 characters!';
    }

    return error;

}

export const stepValidation = (step) => {

    let error = false;

    if (step.length === 0) {
        error = 'This field is required!';
    }
    else if(step.length < 4){
        error = 'Your step should be at least 4 characters!';
    }

    return error;
}