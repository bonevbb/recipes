import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import * as recipeService from '../../services/recipeService';
import * as CreateRecipeHelper from './CreateRecipeHelper';

import './CreateRecipe.css';

export default function CreateRecipe() 
{
    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        desc: false,
        imgUrl: false
    })

    const { user } = useAuth();
    const navigate = useNavigate();

    const onRecipeCreate = (e) => {

        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name            = formData.get('name');
        let description     = formData.get('desc');
        let imageUrl        = formData.get('img');
        let author          = formData.get('author');

        recipeService.create({
            name,
            desc: description,
            img: imageUrl,
            ingredients,
            steps,
            author
        }, user.accessToken)
            .then(result => {
                navigate('/');
        });
    }

    function onChangeIngredientHandler(e) {
        let ingredientValue = e.target.value;        
        setIngredient(ingredientValue);
    }

    function onClickIngredientHandler() {

        if(ingredient.length >= 4){
            setErrors(errors => ({...errors, ingredient: false}));
            setIngredients(oldIngredients => [...oldIngredients, ingredient]);
        }
        else{
            let errorMsg = CreateRecipeHelper.ingredientValidation(ingredient);
            setErrors(errors => ({...errors, ingredient: errorMsg}));
        }

        setIngredient('');

    }

    function onChangeStepHandler(e) {
        let stepValue = e.target.value;
        setStep(stepValue);
    }

    function onClickStepHandler() {

        if(step.length >= 4){
            setErrors(errors => ({...errors, step: false}));
            setSteps(oldSteps => [...oldSteps, step]);
        }
        else{
            console.log(234);
            let errorMsg = CreateRecipeHelper.stepValidation(step);
            setErrors(errors => ({...errors, step: errorMsg}));
        }
        
        setStep('');
    }

    const nameBlurHandler = (e) => {
        let currentName = e.target.value;
        let errorMsg = CreateRecipeHelper.nameValidation(currentName);

        setErrors(errors => ({...errors, name: errorMsg}))
    };

    const descriptionBlurHandler = (e) => {
        let currentDesc = e.target.value;
        let errorMsg = CreateRecipeHelper.descriptionValidation(currentDesc);

        setErrors(errors => ({...errors, desc: errorMsg}))
    };

    const imgUrlBlurHandler = (e) => {
        let imgUrl = e.target.value;
        let errorMsg = CreateRecipeHelper.imgUrlValidation(imgUrl);

        setErrors(errors => ({...errors, imgUrl: errorMsg}))
    };

    return (
        <section className="add-recipe-page">
            <h5>Add recipe</h5>
            <form onSubmit={onRecipeCreate}>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className={`form-control ${errors.name && 'is-invalid'}`} 
                        id="name" 
                        name="name" 
                        placeholder="spaghetti bolognese" 
                        onBlur={nameBlurHandler}
                    />
                    <label className={`${errors.name && 'text-danger'}`} htmlFor="name">Recipe Name</label>
                    <p className="text-danger">{errors.name}</p>
                </div>

                <div className="form-floating mb-3">
                    <textarea className={`form-control ${errors.desc && 'is-invalid'}`} name="desc" id="desc" onBlur={descriptionBlurHandler} placeholder='description'></textarea>
                    <label className={`${errors.desc && 'text-danger'}`} htmlFor="desc">Description</label>
                    <p className="text-danger">{errors.desc}</p>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className={`form-control ${errors.imgUrl && 'is-invalid'}`} id="img" name="img" onBlur={imgUrlBlurHandler} placeholder='imgUrl'/>
                    <label className={`${errors.imgUrl && 'text-danger'}`}  htmlFor="img">Image Url</label>
                    <p className="text-danger">{errors.imgUrl}</p>
                </div>

                <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                        <input type="text" className={`form-control ${errors.ingredient && 'is-invalid'}`} placeholder="500 g Ingredient 1" onChange={onChangeIngredientHandler} value={ingredient}/>
                        <label className={`${errors.ingredient && 'text-danger'}`} htmlFor="ingredient">Add ingredient</label>
                    </div>
                    <button className="btn recipe-btn-outline" onClick={onClickIngredientHandler} type="button" id="button-addon2">Add ingredient</button>
                </div>

                <div className='ingredient-error'>
                    <p className="text-danger">{errors.ingredient}</p>
                </div>

                <h5>Ingredients</h5>
                { ingredients.length > 0 
                    ? <div className="list-ingrediets mb-3">
                        <ul className="list-group">
                            {
                                ingredients.map((ingredientVal, index) =>
                                    <li key={index} className="list-group-item">{ingredientVal}</li>
                                )
                            }
                            
                        </ul>
                    </div>
                    : <p>No ingredients yet!</p>
                }
                
                <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                        <input type="text" className={`form-control ${errors.step && 'is-invalid'}`} placeholder="Mix the ingredients" onChange={onChangeStepHandler} value={step}/>
                        <label className={`${errors.step && 'text-danger'}`} htmlFor="step">Add step</label>
                    </div>
                    <button className="btn recipe-btn-outline" onClick={onClickStepHandler} type="button" id="button-addon2">Add step</button>
                </div>

                <div className='step-error'>
                    <p className="text-danger">{errors.step}</p>
                </div>

                <h5>Steps</h5>
                { steps.length > 0 
                    ? <div className="list-ingrediets mb-3">
                        <ul className="list-group">
                            {
                                steps.map((stepVal, index) =>
                                    <li key={index} className="list-group-item">{stepVal}</li>
                                )
                            }
                            
                        </ul>
                    </div>
                    : <p>No steps yet!</p>
                }

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="author" name="author" placeholder="Pesho" />
                    <label htmlFor="author">Author</label>
                </div>

                <button type="submit" className="btn recipe-btn">Add</button>
            </form>
        </section>
    );
}