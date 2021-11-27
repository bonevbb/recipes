import { Link } from 'react-router-dom';

export default function CatalogCard({
    recipe
}){

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={`/recipes/${recipe._id}`}>
                        <img src="https://via.placeholder.com/450x300" className="img-fluid rounded-start" alt="..." style={{width: "450px", height: "273px"}}/>
                    </Link>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/recipes/${recipe._id}`} className="recipe-title">
                            {recipe.name}
                        </Link>
                    </h5>
                    <hr/>
                    
                    <p className="card-text" style={{height: "160px"}}>
                        {recipe.desc}
                    </p>
                    
                    <div>
                    <div className="float-start">
                        <p className="card-text">
                        <small className="text-muted">Аuthor: <a href="/">{recipe.author}</a></small>
                        </p>
                    </div>
                    <div className="float-end recipe-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="ms-2">3.5</span>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );

}