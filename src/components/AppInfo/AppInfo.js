
export default function AppInfo(){

    return (

        <section id="app-info">
            <div className="text-white px-4 py-5 mb-4" style={{
                backgroundImage: `url("/img/pizzatime.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 700px"
            }}>
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white" style={{textAlign: 'right'}}>React Recipes</h1>
                <div className="col-lg-6" style={{
                    marginLeft: 'auto',
                    marginRight: 0,
                    textAlign: 'right'
                }}>
                    <p className="fs-5 mb-4">
                    The best recipes from the best hobby chefs from around the world in one place! 
                    Always delicious, always beautiful and very healthy!
                    </p>
                </div>
            </div>
        </div>
        </section>

    );

}