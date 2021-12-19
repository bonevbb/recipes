import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import * as likeService from '../../services/likeService';
import { useAuth } from '../../contexts/AuthContext';
import ConfirmDialog from '../Common/ConfirmDialog';

import "./RecipeDetails.css";

export default function RecipeDetails()
{
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({});
    const [likes, setLikes] = useState([]);
    const [userLiked, setUserLiked] = useState(false);
    const [likeId, setLikeId] = useState(null);
    const { recipeId } = useParams();
    const { user } = useAuth();

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult);
            })
    }, [recipeId]);

    useEffect(() => {

        likeService.recipeLikes(recipeId)
            .then(likesResult => {

                let userLikedData = likesResult.filter(like => like._ownerId === user._id)
                let isLiked = userLikedData.length > 0;

                setUserLiked(isLiked);
                setLikes(likesResult);

                if(isLiked){
                    setLikeId(userLikedData[0]._id);
                }
                
        });
            
    }, [recipeId, user._id]);


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

    const likeButtonClick = () => {

        likeService.create({
            "like": true,
            "recipeId": recipeId
        }, user.accessToken)
        .then(result => {
            setLikes([...likes, result]);
            setUserLiked(true);
            setLikeId(result._id);
        });

    }

    const dislikeButtonClick = () => {

        likeService.destroy(likeId, user.accessToken).then((result) => {
            removeLike(user._id);
        }); 
    }

    const removeLike = (userId) => {

        let filLikes = likes.filter(item => item._ownerId !== userId);

        setLikes(filLikes);
        setUserLiked(false);
        setLikeId(null);
        
    }

    const userOwnerButtons = (
        <div className="float-end">
            <Link key={"edit"} type="button" className="btn recipe-btn btn-sm me-1" to={`/edit/${recipeId}`}>Edit</Link>
            <button key={"delete"} type="button" className="btn btn-secondary btn-sm" onClick={openDeleteModal}>Delete</button>
        </div>
    );

    const likeButton = (
        <button key={"like"} type="button" className="btn recipe-btn btn-sm me-2 float-end" onClick={likeButtonClick}>
            <i className="fas fa-thumbs-up like-button-icon"></i>
            Like
        </button>
    )

    const unLikeButton = (
        <button key={"dislike"} type="button" className="btn btn-danger btn-sm me-2 float-end" onClick={dislikeButtonClick}>
            Dislike
        </button>
    )

    const likeButtons = (
        (!userLiked && user._id) ? likeButton : unLikeButton
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

                   
                    {
                       user._id && (user._id !== recipe._ownerId) && likeButtons
                    }

                    <span className="mt-1 me-2 float-end">
                        <span className='pt-2'>Likes: </span>
                        <span className="pt-2">{likes.length} </span>
                    </span>

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
    </>
   );
}