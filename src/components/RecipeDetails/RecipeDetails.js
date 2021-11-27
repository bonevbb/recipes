import { useState, useEffect } from 'react';
import * as recipeService from '../../services/recipeService';

export default function RecipeDetails({
    match
})
{
    const [recipe, setRecipe] = useState({});

    useEffect(async () => {
        let result = await recipeService.getOne(match.params.id);
        setRecipe(result);
    }, []);

   return(
    <section id="recipe-details">

        <div className="card">
            <div className="card-header">
                Recipe details
            </div>

            <div className="card-body">
                <div className="row">
                    <h2>{recipe.name}</h2>
                    <div className="col-lg-4">
                        <img src="https://via.placeholder.com/400" className="card-img-top" alt="..." style={{width: "400px"}}/>
                    </div>
                    <div className="col-lg-4">
                        <h5>Info</h5>
                        <ul className="list-group">
                           
                            <li className="list-group-item">Preparation: <span>15 mins</span></li>
                            <li className="list-group-item">Cook: <span>2 hours</span></li>
                            <li className="list-group-item">Total: <span>2 hours 15 mins</span></li>
                            <li className="list-group-item">Servings: <span>5</span></li>
                            <li className="list-group-item">Yield: <span>6 servings</span></li>
                        </ul>
                    </div> 
                    <div className="col-lg-4">
                        <h5>Ingredients</h5>
                        
                        <ul className="list-group">
                            {recipe.ingredients && recipe.ingredients.map((ingredient) => ( 
                                <div>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                        {ingredient}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-12 mt-2">
                        <hr/>
                        <h5>Steps</h5>
                        <hr/>

                        {recipe.steps && recipe.steps.map((step, index) => ( 
                            <div>
                                <h6>
                                    <i className="fas fa-check-square text-primary"></i>
                                    <span className="ms-2">step {++index}</span>
                                </h6>
                                <p>
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </section>
   );
}