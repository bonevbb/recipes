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

    console.log(values);

    setErrors(validate(values));
    setIsValid(true);

  };

   const onChangeHandler = (event) => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
   };

   const initValues = (values) => {
        setValues(values)
   }

  return {
    onChangeHandler,
    onSubmitHandler,
    initValues,
    values,
    errors,
  }
};

export default useForm;