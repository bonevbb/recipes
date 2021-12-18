import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import * as recipeService from '../../services/recipeService';

import './EditRecipe.css';

export default function EditRecipe() 
{
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});

    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState('');
   
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState('');

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
                setIngredients(recipeResult.ingredients);
                setSteps(recipeResult.steps);
            })

    }, [recipeId]);
   
    const onRecipeCreate = (e) => {

        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name            = formData.get('name');
        let description     = formData.get('desc');
        let imageUrl        = formData.get('img');
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
                navigate('/');
        });
    }

    function onChangeIngrementHandler(e) {
        let ingredientValue = e.target.value;
        setIngredient(ingredientValue);
    }

    function onClickIngrementHandler() {
        setIngredients(oldIngredients => [...oldIngredients, ingredient]);
        setIngredient('');
    }

    function onChangeStepHandler(e) {
        let stepValue = e.target.value;
        setStep(stepValue);
    }

    function onClickStepHandler() {
        setSteps(oldSteps => [...oldSteps, step]);
        setStep('');
    }

    function onDeleteIngredient(e, id){
        e.stopPropagation();
        setIngredients(oldIngredients => oldIngredients.filter((ingredient, index) => index !== id))
    }

    function onDeleteStep(e, id){
        e.stopPropagation();
        setSteps(oldSteps => oldSteps.filter((step, index) => index !== id))
    }

    return (
        <section className="edit-recipe-page">
            <h5>Add recipe</h5>
            <form onSubmit={onRecipeCreate}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" name="name" placeholder="spaghetti bolognese" defaultValue={recipe.name}/>
                    <label htmlFor="name">Recipe Name</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control edit-recipe-textarea" placeholder="Lorem ipsum dolor sit amet." name="desc" id="desc" defaultValue={recipe.desc}></textarea>
                    <label htmlFor="desc">Description</label>
                </div>

                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="img" 
                        name="img" 
                        placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.slimmingeats.com%2Fblog%2Fspaghetti-bolognese&psig=AOvVaw1Ui8LogUtY5LkEANQFQMFm&ust=1638708213833000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjFq5GWyvQCFQAAAAAdAAAAABAJ" 
                        defaultValue={recipe.img}
                    />
                    <label htmlFor="img">Image Url</label>
                </div>

                <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                        <input type="text" className="form-control" placeholder="500 g Ingredient 1" onChange={onChangeIngrementHandler} value={ingredient}/>
                        <label htmlFor="ingredient">Add ingredient</label>
                    </div>
                    <button className="btn recipe-btn-outline" onClick={onClickIngrementHandler} type="button" id="button-addon2">Add ingredient</button>
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
                        <input type="text" className="form-control" placeholder="Mix the ingredients" onChange={onChangeStepHandler} value={step}/>
                        <label htmlFor="step">Add step</label>
                    </div>
                    <button className="btn recipe-btn-outline" onClick={onClickStepHandler} type="button" id="button-addon2">Add step</button>
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

                <button type="submit" className="btn recipe-btn">Save</button>
            </form>
        </section>
    );
}