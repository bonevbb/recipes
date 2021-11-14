import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div>
      
      <Header/>

          <Intro 
            title="Dimond Recipes" 
            desc="the best recipes from the best hobby chefs"
            buttonText="Get Started"
          />

      <Main/>

      <Footer/>

    </div>
  );
}

export default App;
