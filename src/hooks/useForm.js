import { useState, useEffect } from 'react';

export const useForm = (callback, validate, initialValues) => {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isValid) {
      callback(currentEvent);
    }
  }, [errors, callback, isValid, currentEvent]);


  const onSubmitHandler = (event) => {

    if (event) {
        setCurrentEvent(event);
        event.preventDefault();
    }

    setErrors(validate(values));
    setIsValid(true);
    

    // if (Object.keys(errors).length === 0 && isValid) {
    //     console.log(323);
    //     callback(event);
    // }
  };

   const onChangeHandler = (event) => {
        // event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
   };

  return {
    onChangeHandler,
    onSubmitHandler,
    values,
    errors,
  }
};

export default useForm;