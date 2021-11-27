import LasetRecipesItem from './LasetRecipesItem';

export default function LatestRecipes(){

    return (
        <section id="latest-recipes" className="c-latest-recipes">
          <div className="container">

            <div className="section-title">
              <h2>Latest recipes</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eum molestiae sunt consectetur ducimus nulla harum voluptate nobis quae iure!</p>
            </div>

            <div className="row d-flex justify-content-center">

              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />
              <LasetRecipesItem />

            </div>
          </div>
        </section>
    );
    
}