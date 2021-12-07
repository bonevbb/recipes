import { useState, useEffect} from 'react';
import * as recipeService from '../../services/recipeService';
import HomeCard from "../DefaultCard"

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
        <section id="app-info">
            <div className="bg-primary text-white px-4 py-5 text-center mb-4">
              <div className="py-5">
                <h1 className="display-5 fw-bold text-white">React Recipes</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="fs-5 mb-4">
                    The best recipes from the best hobby chefs from around the world in one place! 
                    Always delicious, always beautiful and very healthy!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="our services">
            <div className="container px-4 py-5" id="featured-3">
              <h3 className="pb-2 border-bottom">Our goals</h3>
              <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon text-primary">
                        <i className="fas fa-2x fa-check-square"></i>
                    </div>
                    
                    <h4>Proven recipes</h4>
                    <p>Here you will find only proven recipes from the best hobby chefs. Only recipes that are delicious and healthy.</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon text-primary">
                        <i className="fas fa-2x fa-book-open"></i>
                    </div>
                    <h4>What to cook today</h4>
                    <p>Don't know what to cook today? We will make suggestions to you for breakfast, lunch and dinner.</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon text-primary">
                        <i className="fab fa-2x fa-wpforms"></i>
                    </div>
                    <h4>Fewer discarded products</h4>
                    <p>According to your chosen products or cooking time, we will generate a list of recipes to cook.</p>
                </div>
              </div>
            </div>
          </section>
          
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