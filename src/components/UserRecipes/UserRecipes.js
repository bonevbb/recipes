import { useState, useEffect, useContext} from 'react';
import * as recipeService from '../../services/recipeService';
import UserRecipeCard from "../UserRecipeCard"

import { AuthContext } from '../../contexts/AuthContext';

export default function UserRecipes(){

    const [recipes, setRecipes] = useState([]);
    const { user } = useContext(AuthContext);

    let userId = user._id;

    useEffect(() => {
        recipeService.userRecipes(userId)
            .then(result => {
                setRecipes(result);
            })
    }, [userId]);
    

    return (
        <section id="latest-recipes">
            
            <div className="card">
                <div className="card-header">
                    My Recipes
                </div>

                <div className="card-body">
                    {/* Begin recipes */}
                    <div className="row row-cols-1 row-cols-md-5 g-3">

                        {
                            recipes.length > 0
                                ? recipes.map(recipe => 
                                    <UserRecipeCard 
                                        key={recipe._id} 
                                        recipe={recipe} 
                                    />)
                                : <h6>No recipes yet...</h6>  
                        }

                    </div>
                    {/* End recipes */}
                </div>
            </div>

        </section>
    );

}