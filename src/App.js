import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="container">
      
        <Header/>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalog" exact component={Catalog} />
            {/* <Route path="/create-game" component={CreateGame} /> */}
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/register" component={Register} /> */}
            <Route path="/recipes/:id" component={RecipeDetails} />
            <Route path="/custom">
                <h2>Custom Page</h2>
                <p>dasklfjasldf </p>
            </Route>
            <Route path="/logout" render={(props) => {
                console.log('Logged Out!!!');
                return <Redirect to="/" />
            }} />
        </Switch>

       <Footer />
      

        
        
  </div>
  );
}

export default App;
