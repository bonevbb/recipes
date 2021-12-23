import HomeCard from "../DefaultCard";

export default function LatestRecipes({
    recipes
}){

    return (
        <section id="latest-recipes">
            
        <div className="card">
            <div className="card-header">
                Latest Recipes
            </div>

            <div className="card-body">
                
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
              
            </div>
        </div>

        </section>
    );

}