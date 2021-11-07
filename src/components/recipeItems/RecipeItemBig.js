
export default function RecipeItemBig()
{
    return (
        <div className="col-lg-12 col-md-6 d-flex align-items-stretch recipe-item mt-2">

            <div className="recipe">
                <div className="recipe-title pt-2">
                    Category: Dinner
                </div>
                <div className="recipe-img pb-5 pt-2">
                    <img src="https://via.placeholder.com/900x500" className="img-fluid" alt="" />
                </div>

                <div className="recipe-info pb-3">
                    <h5>Lorem, ipsum.</h5>
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga beatae et quos, tempora, eveniet itaque repellat ipsa nam rem blanditiis temporibus libero neque magnam quidem?
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
    );

}