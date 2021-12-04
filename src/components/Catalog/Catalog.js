import { useState, useEffect} from 'react';
import * as recipeService from '../../services/recipeService';

import CatalogCard from "../CatalogCard"

export default function Catalog(){

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result);
            })
    }, []);

    return (
        <section id="all-recipes">

            <div className="card">

                <div className="card-header">
                    All recipes
                </div>

                <div className="card-body">

                    {
                        recipes.length > 0
                            ? recipes.map(recipe => 
                                <CatalogCard 
                                    key={recipe._id} 
                                    recipe={recipe} 
                                />)
                            : <div className="text-center">
                                <h6>No recipes yet...</h6>
                            </div>
                    }

                </div>
            </div>

        </section>
    );

}