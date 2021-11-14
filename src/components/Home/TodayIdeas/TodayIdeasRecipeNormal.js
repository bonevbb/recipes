
export default function RecipeItemNormal(props)
{
    return (
        <div className="col-lg-12 col-md-6 d-flex align-items-stretch recipe-item mt-2">

            <div className="recipe">
                <div className="recipe-title pt-2">
                    Category: {props.category}
                </div>
                <div className="recipe-img pb-3 pt-2">
                    <img src="https://via.placeholder.com/330x200" className="img-fluid" alt="" />
                </div>

                <div className="recipe-info pb-3">
                    <h5>Lorem, ipsum.</h5>
                    {/* <span>
                    Lorem ipsum dolor sit amet consectetur.
                    </span> */}
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
                        Author: <a href="/" target="_blank" rel="noopener noreferrer">Test</a>
                    </div>
                </div>
            </div>

        </div>
    );

}