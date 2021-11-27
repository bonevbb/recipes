
export default function LasetRecipesItem()
{
    return (
        <div className="col-lg-2 col-md-6 d-flex align-items-stretch recipe-item mt-2 ms-2">
            <div className="recipe">
                <div className="recipe-category pt-2">
                    Category: Test
                </div>
                <div className="recipe-img pb-3 pt-2">
                    <a className="recipe-title" href="/">
                        <img src="https://via.placeholder.com/200" className="img-fluid" alt="" />
                    </a>
                </div>

                <div className="recipe-footer pb-2 text-center">
                    <div className="recipe-info pb-3">
                        <a className="recipe-title" href="/">
                            <span>Lorem, ipsum.</span>
                        </a>
                    </div>
                    <div className="recipe-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="ms-2">3.5</span>
                    </div>
                    <div className="recipe-author">
                        Author: <a href="/" target="_blank" rel="noopener noreferrer">Test</a>
                    </div>
                </div>
            </div>
        </div>
    );

}