import { Link } from 'react-router-dom';

export default function HomeCard({
    recipe
})
{
    console.log(recipe);
    return (
        <div className="col">
            <div className="card h-100">

                <Link to={`/recipes/${recipe._id}`}>
                    <img src="https://via.placeholder.com/240" className="card-img-top" alt="..."/>
                </Link>
                
                <div className="card-body">

                    <h5 className="card-title">
                        <Link to={`/recipes/${recipe._id}`} className="recipe-title">{recipe.name}</Link>
                    </h5>

                    <p className="card-text">{recipe.desc}</p>

                    <div className="recipe-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    <span className="ms-2">3.5</span>

                </div>
                </div>
                <div className="card-footer">
                <div className="float-start">
                    <p className="card-text">
                        <small className="text-muted">Аuthor: <a href="/" alt="">{recipe.author}</a></small>
                    </p>
                </div>
                
                </div>
            </div>
        </div>
    );
}