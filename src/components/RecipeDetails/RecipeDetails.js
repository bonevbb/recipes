import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import { useAuth } from '../../contexts/AuthContext';
import ConfirmDialog from '../Common/ConfirmDialog';
import LikeRecipeElement from '../Common/LikeRecipeElement';

import "./RecipeDetails.css";


export default function RecipeDetails()
{
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({});
  
    const { recipeId } = useParams();
    const { user } = useAuth();

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
            })
    }, [recipeId]);

    const openDeleteModal = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteDialog(false);
    };
    
    const deleteHandler = () => {

        recipeService.destroy(recipeId, user.accessToken)
            .then(() => {
                setShowDeleteDialog(false);
                navigate('/my-recipes');
            });

    };

    const userOwnerButtons = (
        <div className="float-end">
            <Link key={"edit"} type="button" className="btn recipe-btn btn-sm me-1" to={`/edit/${recipeId}`}>Edit</Link>
            <button key={"delete"} type="button" className="btn btn-secondary btn-sm" onClick={openDeleteModal}>Delete</button>
        </div>
    );

   return(
    <>   
        <ConfirmDialog 
            showDialog={showDeleteDialog}
            closeDialog={closeDeleteModal}
            onSave={deleteHandler}
            title="Do you want to delete recipe ?"
        />

        <section id="recipe-details">

            <div className="card">
                <div className="card-header">

                    Recipe details

                    {
                        user._id && (user._id === recipe._ownerId) && userOwnerButtons
                    }

                    <LikeRecipeElement user={user} recipe={recipe}/>
                </div>

                <div className="card-body">
                    <div className="row">
                        <h2>{recipe.name}</h2>
                        <hr/>
                        <div className="col-lg-5">
                            <img src={recipe.img ? recipe.img : 'https://via.placeholder.com/400'} className="card-img-big" alt="..." />
                        </div>
                        <div className="col-lg-7">
                            <h5>Description</h5>
                            <hr/>
                            <p>{recipe.desc}</p>
                        </div> 
                        <div className="col-lg-6 mt-2">
                            <hr/>
                            <h5>Ingredients</h5>
                            <hr/>
                            
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

                        <div className="col-lg-6 mt-2">
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
    </>
   );
}