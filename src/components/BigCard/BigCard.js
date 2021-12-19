import { Link } from 'react-router-dom';

export default function CatalogCard({
    recipe
}){
    
    return (
        <div className="card mb-3 recipe-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={`/details/${recipe._id}`}>
                        <img src={recipe.img ? recipe.img : 'https://via.placeholder.com/400x300'} className="img-fluid rounded-start" alt="..." style={{width: "400px", height: "300px"}}/>
                    </Link>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/details/${recipe._id}`} className="recipe-title">
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
                            <small className="text-muted">Аuthor: <span>{recipe.author.length === 0 ? 'Anonymous' : recipe.author}</span></small>
                            </p>
                        </div>
                        {/* <div className="recipe-likes float-end text-color">
                            <span className='me-2'><i className="fas fa-thumbs-up"></i></span>
                            <span className='pt-2'>Likes: </span>
                            <span className="pt-2">3.5 </span>
                        </div> */}

                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );

}