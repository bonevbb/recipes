// // import { useState, useEffect } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';

// // import { useAuth } from '../../contexts/AuthContext';
// // import * as recipeService from '../../services/recipeService';
// // import * as CreateRecipeHelper from '../RecipeValidationHelper';

// // import './EditRecipe.css';

// export default function EditRecipe() 
// {
//     // const { recipeId } = useParams();
//     // const [recipe, setRecipe] = useState({});

//     // const [ingredients, setIngredients] = useState([]);
//     // const [ingredient, setIngredient] = useState('');
   
//     // const [steps, setSteps] = useState([]);
//     // const [step, setStep] = useState('');
//     // const [errors, setErrors] = useState({
//     //     name: false,
//     //     desc: false,
//     //     imgUrl: false,
//     //     ingredient: false,
//     //     step: false
//     // });

//     // const { user } = useAuth();
//     // const navigate = useNavigate();

//     // useEffect(() => {
//     //     recipeService.getOne(recipeId)
//     //         .then(recipeResult => {
//     //             setRecipe(recipeResult);
//     //             setIngredients(recipeResult.ingredients);
//     //             setSteps(recipeResult.steps);
//     //         })

//     // }, [recipeId]);
   
//     // const onRecipeUpdate = (e) => {

//     //     e.preventDefault();
//     //     let formData = new FormData(e.currentTarget);

//     //     let name            = formData.get('name');
//     //     let description     = formData.get('desc');
//     //     let imageUrl        = formData.get('img');
//     //     let author          = formData.get('author');

//     //     recipeService.update(recipeId,
//     //     {
//     //         name,
//     //         desc: description,
//     //         img: imageUrl,
//     //         ingredients,
//     //         steps,
//     //         author
//     //     }, user.accessToken)
//     //         .then(result => {
//     //             navigate('/');
//     //     });
//     // }

//     // function onChangeIngredientHandler(e) {
//     //     let ingredientValue = e.target.value;        
//     //     setIngredient(ingredientValue);
//     // }

//     // function onClickIngredientHandler() {

//     //     if(ingredient.length >= 4){
//     //         setErrors(errors => ({...errors, ingredient: false}));
//     //         setIngredients(oldIngredients => [...oldIngredients, ingredient]);
//     //     }
//     //     else{
//     //         let errorMsg = CreateRecipeHelper.ingredientValidation(ingredient);
//     //         setErrors(errors => ({...errors, ingredient: errorMsg}));
//     //     }

//     //     setIngredient('');

//     // }

//     // function onChangeStepHandler(e) {
//     //     let stepValue = e.target.value;
//     //     setStep(stepValue);
//     // }

//     // function onClickStepHandler() {

//     //     if(step.length >= 4){
//     //         setErrors(errors => ({...errors, step: false}));
//     //         setSteps(oldSteps => [...oldSteps, step]);
//     //     }
//     //     else{
//     //         let errorMsg = CreateRecipeHelper.stepValidation(step);
//     //         setErrors(errors => ({...errors, step: errorMsg}));
//     //     }
        
//     //     setStep('');
//     // }

//     // function onDeleteIngredient(e, id){
//     //     e.stopPropagation();
//     //     setIngredients(oldIngredients => oldIngredients.filter((ingredient, index) => index !== id))
//     // }

//     // function onDeleteStep(e, id){
//     //     e.stopPropagation();
//     //     setSteps(oldSteps => oldSteps.filter((step, index) => index !== id))
//     // }

//     // const nameOnChangeHandler = (e) => {
//     //     let currentName = e.target.value;
//     //     let errorMsg = CreateRecipeHelper.nameValidation(currentName);

//     //     setErrors(errors => ({...errors, name: errorMsg}))
//     // };

//     // const descriptiOnChangeHandler = (e) => {
//     //     let currentDesc = e.target.value;
//     //     let errorMsg = CreateRecipeHelper.descriptionValidation(currentDesc);

//     //     setErrors(errors => ({...errors, desc: errorMsg}))
//     // };

//     // const imgUrlOnChangeHandler = (e) => {
//     //     let imgUrl = e.target.value;
//     //     let errorMsg = CreateRecipeHelper.imgUrlValidation(imgUrl);

//     //     setErrors(errors => ({...errors, imgUrl: errorMsg}))
//     // };

//     // return (
//     //     <section className="edit-recipe-page">
//     //         <h5>Add recipe</h5>
//     //         <form onSubmit={onRecipeUpdate}>
//     //             <div className="form-floating mb-3">
//     //                 <input 
//     //                     type="text" 
//     //                     className={`form-control ${errors.name && 'is-invalid'}`} 
//     //                     id="name" 
//     //                     name="name" 
//     //                     placeholder="spaghetti bolognese" 
//     //                     onChange={nameOnChangeHandler}
//     //                     required
//     //                     defaultValue={recipe.name}
//     //                 />
//     //                 <label className={`${errors.name && 'text-danger'}`} htmlFor="name">Recipe Name</label>
//     //                 <p className="text-danger">{errors.name}</p>
//     //             </div>

//     //             <div className="form-floating mb-3">
//     //                 <textarea 
//     //                     className={`form-control ${errors.desc && 'is-invalid'}`} 
//     //                     name="desc" 
//     //                     id="desc" 
//     //                     onChange={descriptiOnChangeHandler} 
//     //                     placeholder='description' 
//     //                     required 
//     //                     defaultValue={recipe.desc}
//     //                 >

//     //                 </textarea>
//     //                 <label className={`${errors.desc && 'text-danger'}`} htmlFor="desc">Description</label>
//     //                 <p className="text-danger">{errors.desc}</p>
//     //             </div>

//     //             <div className="form-floating mb-3">
//     //                 <input defaultValue={recipe.img} type="text" className={`form-control ${errors.imgUrl && 'is-invalid'}`} id="img" name="img" onChange={imgUrlOnChangeHandler} placeholder='imgUrl' required/>
//     //                 <label className={`${errors.imgUrl && 'text-danger'}`}  htmlFor="img">Image Url</label>
//     //                 <p className="text-danger">{errors.imgUrl}</p>
//     //             </div>

//     //             <div className="input-group mb-3">
//     //                 <div className="form-floating flex-grow-1">
//     //                     <input type="text" className={`form-control ${errors.ingredient && 'is-invalid'}`} placeholder="500 g Ingredient 1" onChange={onChangeIngredientHandler} value={ingredient}/>
//     //                     <label className={`${errors.v && 'text-danger'}`} htmlFor="ingredient">Add ingredient</label>
//     //                 </div>
//     //                 <button className="btn recipe-btn-outline" onClick={onClickIngredientHandler} type="button" id="button-addon2">Add ingredient</button>
//     //             </div>

//     //             <div className='ingredient-error'>
//     //                 <p className="text-danger">{errors.ingredient}</p>
//     //             </div>

//     //             <h5>Ingredients</h5>
//     //             { ingredients.length > 0 
//     //                 ? <div className="list-ingrediets mb-3">
//     //                     <ul className="list-group">
//     //                         {
//     //                             ingredients.map((ingredientVal, index) =>
//     //                                 <li key={index} className="list-group-item">
//     //                                     {ingredientVal}
//     //                                     <button onClick={(e) => onDeleteIngredient(e, index)} type="button" className="btn-close float-end" aria-label="Close"></button>
//     //                                 </li>
//     //                             )
//     //                         }
                            
//     //                     </ul>
//     //                 </div>
//     //                 : <p>No ingredients yet!</p>
//     //             }
                
//     //             <div className="input-group mb-3">
//     //                 <div className="form-floating flex-grow-1">
//     //                     <input type="text" className={`form-control ${errors.step && 'is-invalid'}`} placeholder="Mix the ingredients" onChange={onChangeStepHandler} value={step}/>
//     //                     <label className={`${errors.step && 'text-danger'}`} htmlFor="step">Add step</label>
//     //                 </div>
//     //                 <button className="btn recipe-btn-outline" onClick={onClickStepHandler} type="button" id="button-addon2">Add step</button>
//     //             </div>

//     //             <div className='step-error'>
//     //                 <p className="text-danger">{errors.step}</p>
//     //             </div>

//     //             <h5>Steps</h5>
//     //             { steps.length > 0 
//     //                 ? <div className="list-ingrediets mb-3">
//     //                     <ul className="list-group">
//     //                         {
//     //                             steps.map((stepVal, index) => 
                           
//     //                                     <li key={index} className="list-group-item">
//     //                                         {stepVal}
//     //                                         <button onClick={(e) => onDeleteStep(e, index)} type="button" className="btn-close float-end" aria-label="Close"></button>
//     //                                     </li>
                                        
//     //                             )
//     //                         }
                            
//     //                     </ul>
//     //                 </div>
//     //                 : <p>No steps yet!</p>
//     //             }

//     //             <div className="form-floating mb-3">
//     //                 <input type="text" className="form-control" id="author" name="author" placeholder="Pesho" defaultValue={recipe.author}/>
//     //                 <label htmlFor="author">Author</label>
//     //             </div>

//     //             <button type="submit" className="btn recipe-btn">Save</button>
//     //         </form>
//     //     </section>
//     // );
    
    
// }

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import * as recipeService from '../../services/recipeService';
import validate from '../RecipeValidationHelper';
import useForm from "../../hooks/useForm";

import './EditRecipe.css';

const initialLocalValues = {
    ingredient: false,
    step: false
};


const initialFormValues = {
    name: '',
    desc: '',
    imgUrl: ''
};

export default function EditRecipe() 
{
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});

    const { user } = useAuth();
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState('');
    const [localErrors, setlocalErrors] = useState(initialLocalValues);

    const updateRecipe = (e) => {

        e.preventDefault();
        let formData = new FormData(e.target);

        let name            = formData.get('name');
        let description     = formData.get('desc');
        let imageUrl        = formData.get('imgUrl');
        let author          = formData.get('author');

        recipeService.update(recipeId,
        {
            name,
            desc: description,
            img: imageUrl,
            ingredients,
            steps,
            author
        }, user.accessToken)
            .then(result => {
                navigate('/my-recipes');
        });
    }

    const {
        onChangeHandler,
        onSubmitHandler,
        initValues,
        errors
    } = useForm(updateRecipe, validate, initialFormValues);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
                setIngredients(recipeResult.ingredients);
                setSteps(recipeResult.steps);
            });

    }, [recipeId]);

    const formInitValues = (recipe) => {
        initValues({
            name: recipe.name,
            desc: recipe.desc,
            imgUrl: recipe.img
        });
    }

    useEffect(() => {
        formInitValues(recipe);
    }, [recipe]);

    function onChangeIngredientHandler(e) {
        let ingredientValue = e.target.value;
        setIngredient(ingredientValue);
    }

    function onClickIngredientHandler() {

        let error = false;

        if (ingredient.length === 0) {
            error = 'This field is required!';
        }
        else if (ingredient.length < 3) {
            error = 'Your name sould be at least 3 characters!';
        }

        if(error.length > 0){
            setlocalErrors(localErrors => ({ ...localErrors, ingredient: error}));
            console.log(localErrors);
        }
        else{
            setIngredients(oldIngredients => [...oldIngredients, ingredient]);

            setIngredient('');
            setlocalErrors(localErrors => ({ ...localErrors, ingredient: ''}));
        }

    }

    function onDeleteIngredient(e, id){
        e.stopPropagation();
        setIngredients(oldIngredients => oldIngredients.filter((ingredient, index) => index !== id))
    }

    function onChangeStepHandler(e) {
        let stepValue = e.target.value;
        setStep(stepValue);
    }

    function onClickStepHandler() {

        let error = false;

        if (step.length === 0) {
            error = 'This field is required!';
        }
        else if (step.length < 3) {
            error = 'Your name sould be at least 3 characters!';
        }

        if(error.length > 0){
            setlocalErrors(localErrors => ({ ...localErrors, step: error}));
        }
        else{
            setSteps(oldSteps => [...oldSteps, step]);

            setStep('');
            setlocalErrors(localErrors => ({ ...localErrors, step: ''}));
        }
    }

    function onDeleteStep(e, id){
        e.stopPropagation();
        setSteps(oldSteps => oldSteps.filter((step, index) => index !== id))
    }
    
    return (
        <section className="add-recipe-page">
            <h5>Add recipe</h5>
            
            <form onSubmit={onSubmitHandler}>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className={`form-control ${errors.name && 'is-invalid'}`} 
                        id="name" 
                        name="name" 
                        placeholder="spaghetti bolognese" 
                        onChange={onChangeHandler}
                        defaultValue={recipe.name}
                    />
                    <label className={`${errors.name && 'text-danger'}`} htmlFor="name">Recipe Name</label>
                    <p className="text-danger">{errors.name}</p>
                </div>

                 <div className="form-floating mb-3">
                    <textarea 
                        className={`form-control edit-recipe-textarea ${errors.desc && 'is-invalid'}`} 
                        name="desc" 
                        id="desc" 
                        onChange={onChangeHandler} 
                        placeholder='description'
                        defaultValue={recipe.desc}
                    >
                    </textarea>
                    <label className={`${errors.desc && 'text-danger'}`} htmlFor="desc">Description</label>
                    <p className="text-danger">{errors.desc}</p>
                </div>

                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className={`form-control ${errors.imgUrl && 'is-invalid'}`} 
                        id="img" 
                        name="imgUrl" 
                        onChange={onChangeHandler} 
                        placeholder='imgUrl'
                        defaultValue={recipe.img}
                    />
                    <label className={`${errors.imgUrl && 'text-danger'}`}  htmlFor="img">Image Url</label>
                    <p className="text-danger">{errors.imgUrl}</p>
                </div>

                <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                        <input 
                            type="text" 
                            className={`form-control ${localErrors.ingredient && 'is-invalid'}`} 
                            placeholder="500 g Ingredient 1" 
                            onChange={onChangeIngredientHandler}
                            value={ingredient}
                        />
                        <label className={`${localErrors.ingredient && 'text-danger'}`} htmlFor="ingredient">Add ingredient</label>
                    </div>
                    <button className="btn recipe-btn-outline" onClick={onClickIngredientHandler} type="button" id="button-addon2">Add ingredient</button>
                </div>

                <div className='ingredient-error'>
                    <p className="text-danger">{localErrors.ingredient}</p>
                </div>

                <h5>Ingredients</h5>
                { ingredients.length > 0 
                    ? <div className="list-ingrediets mb-3">
                        <ul className="list-group">
                            {
                                ingredients.map((ingredientVal, index) =>
                                    <li key={index} className="list-group-item">
                                        {ingredientVal}
                                        <button onClick={(e) => onDeleteIngredient(e, index)} type="button" className="btn-close float-end" aria-label="Close"></button>
                                    </li>  
                                )
                            }
                            
                        </ul>
                    </div>
                    : <p>No ingredients yet!</p>
                }
                
                <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                        <input 
                            type="text" 
                            className={`form-control ${localErrors.step && 'is-invalid'}`} 
                            placeholder="Mix the ingredients" 
                            name="step" 
                            onChange={onChangeStepHandler} 
                            value={step}
                        />
                        <label className={`${localErrors.step && 'text-danger'}`} htmlFor="step">Add step</label>
                    </div>
                    <button className="btn recipe-btn-outline" onClick={onClickStepHandler} type="button" id="button-addon2">Add step</button>
                </div>

                <div className='step-error'>
                    <p className="text-danger">{localErrors.step}</p>
                </div>

                <h5>Steps</h5>
                { steps.length > 0 
                    ? <div className="list-ingrediets mb-3">
                        <ul className="list-group">
                            {
                                steps.map((stepVal, index) =>
                                    <li key={index} className="list-group-item">
                                        {stepVal}
                                        <button onClick={(e) => onDeleteStep(e, index)} type="button" className="btn-close float-end" aria-label="Close"></button>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                    : <p>No steps yet!</p>
                }

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="author" name="author" placeholder="Pesho" defaultValue={recipe.author}/>
                    <label htmlFor="author">Author</label>
                </div>
                
                <button type="submit" className="btn recipe-btn">Add</button>
            </form>
        </section>
    );
}