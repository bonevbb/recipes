import BigCard from '../BigCard';

export default function CookToday({
    recipe
}){

    return (
         <section id="cook-today">
            
            <div className="card mb-2">
                <div className="card-header">
                    Cook today
                </div>

                <div className="card-body">
                    <BigCard recipe={recipe}/>
                </div>
            </div>

        </section>
    );

}