
export default function OurGoals(){

    return (

        <section id="our-goals">
            <div className="container px-4 py-5" id="featured-3">
                <h3 className="pb-2 border-bottom">Our goals</h3>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon text-color">
                            <i className="fas fa-2x fa-check-square"></i>
                        </div>
                        
                        <h4>Proven recipes</h4>
                        <p>Here you will find only proven recipes from the best hobby chefs. Only recipes that are delicious and healthy.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon text-color">
                            <i className="fas fa-2x fa-book-open"></i>
                        </div>
                        <h4>What to cook today</h4>
                        <p>Don't know what to cook today? We will make suggestions to you for breakfast, lunch and dinner.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon text-color">
                            <i className="fab fa-2x fa-wpforms"></i>
                        </div>
                        <h4>Fewer discarded products</h4>
                        <p>According to your chosen products or cooking time, we will generate a list of recipes to cook.</p>
                    </div>
                </div>
            </div>
        </section>

    );

}