import { Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import UserRecipes from './components/UserRecipes';
import EditRecipe from './components/EditRecipe';

function App() {

  

  return (
    <AuthProvider>
      <div className="container">
          
          <Header/>

          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/catalog" exact element={<Catalog/>} />
              <Route path="/create-recipe" element={<CreateRecipe/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/details/:recipeId" element={<RecipeDetails/>} />
              <Route path="/edit/:recipeId" element={<EditRecipe/>} />
              <Route path="/my-recipes" element={<UserRecipes/>} />
          </Routes>

        <Footer />
        
      </div>
    </AuthProvider>
  );
}

export default App;
