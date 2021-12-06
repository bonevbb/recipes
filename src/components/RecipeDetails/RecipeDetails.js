import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';

import { AuthContext } from '../../contexts/AuthContext';

import "./RecipeDetails.css";

export default function RecipeDetails()
{
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
            })
    }, [recipeId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        recipeService.destroy(recipeId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    };

   return(
    <section id="recipe-details">

        <div className="card">
            <div className="card-header">
                Recipe details

                {
                    user._id && (user._id === recipe._ownerId 

                    ? <div className="float-end">
                        <button key={1} type="button" className="btn btn-primary btn-sm me-1">Edit</button>
                        <button key={2} type="button" className="btn btn-secondary btn-sm" onClick={deleteHandler}>Delete</button>
                    </div>
                    : <div className="float-end">
                        <button type="button" className="btn btn-primary btn-sm">
                            <i className="fas fa-thumbs-up like-button-icon"></i>
                            Like
                            </button>
                    </div>
                    )
                }
                
            </div>

            <div className="card-body">
                <div className="row">
                    <h2>{recipe.name}</h2>
                    <div className="col-lg-4">
                        <img src={recipe.img ? recipe.img : 'https://via.placeholder.com/400'} className="card-img-top" alt="..." style={{width: "400px"}}/>
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
                            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => ( 
                                <div key={index}>
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
                            <div key={index}>
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