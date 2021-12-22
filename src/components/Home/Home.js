import { useState, useEffect} from 'react';
import * as recipeService from '../../services/recipeService';
import HomeCard from "../DefaultCard";
import AppInfo from "../AppInfo";
import OurGoals from '../OurGoals';

export default function Home(){

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getLatest()
            .then(result => {
                setRecipes(result);
            })
    }, []);
    

    return (
        <>

        <AppInfo />

         <OurGoals />
          
        <section id="latest-recipes">
            
            <div className="card">
                <div className="card-header">
                    Latest Recipes
                </div>

                <div className="card-body">
                    {/* Begin recipes */}
                    <div className="row row-cols-1 row-cols-md-5 g-3">

                        {
                            recipes.length > 0
                                ? recipes.map(recipe => 
                                    <HomeCard 
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
        </>
    );

}