
export default function DailyRecipes(){

    return (
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Deily Recipes</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eum molestiae sunt consectetur ducimus nulla harum voluptate nobis quae iure!</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="row">
                  <div class="col-lg-12 col-md-6 d-flex align-items-stretch recipe-item">
                      <div class="recipe">
                        <div class="recipe-img pb-3 pt-2">
                          
                          <img src="https://via.placeholder.com/450" class="img-fluid" alt="" />
                        </div>
                        <div class="recipe-info pb-3">
                          <h5>Lorem, ipsum.</h5>
                          <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Explicabo libero necessitatibus sequi quo reiciendis fugit excepturi animi officia nam ipsum?
                          </span>
                        </div>
                        <div className="recipe-footer pb-5">
                          <div className="recipe-rating float-start">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="ms-2">3.5</span>
                          </div>
                          <div className="recipe-author float-end">
                              by <a href="/" target="_blank" rel="noopener noreferrer">Test</a>
                          </div>
                        </div>
                       
                      </div>
                  </div>
                </div>
             
              </div>
              
              <div className="col-lg-8">
               <p>21312</p>
              </div>
            </div>
          </div>
        </section>
    );
    
}