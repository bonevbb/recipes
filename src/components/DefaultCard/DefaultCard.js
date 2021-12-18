import { Link } from 'react-router-dom';

export default function HomeCard({
    recipe
})
{
    
    return (
        <div className="col">
            <div className="card h-100 recipe-card">

                <Link to={`/details/${recipe._id}`}>
                    <img src={recipe.img ? recipe.img : 'https://via.placeholder.com/240'} className="card-img-top" alt="..."/>
                </Link>
                
                <div className="card-body">

                    <h5 className="card-title">
                        <Link to={`/details/${recipe._id}`} className="recipe-title">{recipe.name}</Link>
                    </h5>

                    <p className="card-text">{recipe.desc}</p>

                    {/* <div className="recipe-likes">
                        <span className='me-2'><i className="fas fa-thumbs-up"></i></span>
                        <span className='pt-2'>Likes: </span>
                        <span className="pt-2">3.5 </span>
                    </div> */}
                </div>
                <div className="card-footer">
                <div className="float-start">
                    <p className="card-text">
                        <small className="text-muted">Аuthor: {recipe.author}</small>
                    </p>
                </div>
                
                </div>
            </div>
        </div>
    );
}