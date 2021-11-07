import RecipeItemNormal from  "../recipeItems/RecipeItemNormal.js"
import RecipeItemBig from  "../recipeItems/RecipeItemBig.js"

export default function DailyRecipes(){

    return (
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Daily Recipes</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eum molestiae sunt consectetur ducimus nulla harum voluptate nobis quae iure!</p>
            </div>

            <div className="row d-flex justify-content-center">

              <div className="col-lg-3 d-recipe-left-column">
                <div className="row">

                  <RecipeItemNormal category="Breakfast"/>
                  <RecipeItemNormal category="Lunch"/>

                </div>
              </div>

              <div className="col-lg-8">
                <div className="row d-recipe-left-el">

                  <RecipeItemBig />

                </div>
              </div>

            </div>
          </div>
        </section>
    );
    
}