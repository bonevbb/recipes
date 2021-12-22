import { useState, useEffect } from 'react';
import * as likeService from '../../../services/likeService';

export default function LikeButton({
    user,
    recipe
}){
    const [likes, setLikes] = useState([]);
    const [userLiked, setUserLiked] = useState(false);
    const [likeId, setLikeId] = useState(null);

    useEffect(() => {

        likeService.recipeLikes(recipe._id)
            .then(likesResult => {

                let userLikedData = likesResult.filter(like => like._ownerId === user._id)
                let isLiked = userLikedData.length > 0;

                setUserLiked(isLiked);
                setLikes(likesResult);

                if(isLiked){
                    setLikeId(userLikedData[0]._id);
                }
        });   

    }, [recipe._id, user._id]);

    const likeButtonClick = () => {

        likeService.create({
            "like": true,
            "recipeId": recipe._id
        }, user.accessToken)
        .then(result => {
            setLikes([...likes, result]);
            setUserLiked(true);
            setLikeId(result._id);
        });

    }

    const dislikeButtonClick = () => {

        likeService.destroy(likeId, user.accessToken).then(() => {
            removeLike(user._id);
        }); 
    }

    const removeLike = (userId) => {

        let filLikes = likes.filter(like => like._ownerId !== userId);

        setLikes(filLikes);
        setUserLiked(false);
        setLikeId(null);
        
    }

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

    return (
        <>
             {
                user._id && (user._id !== recipe._ownerId) && likeButtons
            }

            <span className="mt-1 me-2 float-end">
                <span className='pt-2'>Likes: </span>
                <span className="pt-2">{likes.length} </span>
            </span>
        </>
    );
}