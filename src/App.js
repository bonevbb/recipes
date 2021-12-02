import { Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Logout from './components/Logout';
import Register from './components/Register';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};

function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      <div className="container">
        
          <Header/>

          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/catalog" exact element={<Catalog/>} />
              {/* <Route path="/create-game" element={CreateGame} /> */}
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/recipes/:recipeId" element={<RecipeDetails/>} />
              <Route path="/logout" element={<Logout/>}/>
          </Routes>

        <Footer />
        
      </div>
    </AuthContext.Provider>
  );
}

export default App;
