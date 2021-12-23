import { useState, useEffect} from 'react';
import * as recipeService from '../../services/recipeService';
import AppInfo from "../AppInfo";
import OurGoals from '../OurGoals';
import CookToday from '../CookToday';
import LatestRecipes from '../LatestRecipes/LatestRecipes';

export default function Home(){

    const [recipes, setRecipes] = useState([]);
    const [cookTodayRecipe, setCookTodayRecipe] = useState({});

    useEffect(() => {
        recipeService.getLatest()
            .then(result => {
                setRecipes(result);

                let cookToday = result[Math.floor(Math.random() * result.length)];
                setCookTodayRecipe(cookToday);
            })
    }, []);
    

    return (
        <>

        <AppInfo />
        <OurGoals />
        <CookToday recipe={cookTodayRecipe} />
        <LatestRecipes recipes={recipes}/>  
       
        </>
    );

}