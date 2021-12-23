
export default function validate(values) 
{

    let errors = {};

    //validate name
    if (values.name.length === 0) {
        errors.name = 'This field is required!';
    }
    else if (values.name.length < 3) {
        errors.name = 'Your name sould be at least 3 characters!';
    } else if (values.name.length > 50) {
        errors.name = 'Your name sould be max 10 characters!';
    }

    //validate description (desc)
    if (values.desc.length === 0) {
        errors.desc = 'This field is required!';
    }
    else if (values.desc.length < 10) {
        errors.desc = 'Your description should be at least 10 characters!';
    } else if (values.desc.length > 255) {
        errors.desc = 'Your description should be max 255 characters!';
    }

    return errors;

}