import Header from './components/Header';
import Intro from './components/hero-section-elements/Intro';
import Main from './components/Main';
// import Helmet from "react-helmet";
import Footer from "./components/Footer";
// import FirstInfoBox from "./components/hero-section-elements/FirstInfoBox";
// import SecondInfoBox from "./components/hero-section-elements/SecondInfoBox";
// import ThirdInfoBox from "./components/hero-section-elements/ThirdInfoBox";
// import FourthInfoBox from "./components/hero-section-elements/ThirdInfoBox";

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

       
      

      {/* <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

          <div className="row icon-boxes">

            <FirstInfoBox/>
            <SecondInfoBox/>
            <ThirdInfoBox/>
            <FourthInfoBox/>

          </div>
        </div>
      </section> */}

      <Main/>

      {/* <Helmet> */}
        {/* <script src="/assets/vendor/aos/aos.js"></script> */}
        {/* <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
        {/* <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script> */}
        {/* <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script> */}
        {/* <script src="/assets/vendor/php-email-form/validate.js"></script> */}
        {/* <script src="/assets/vendor/purecounter/purecounter.js"></script> */}
        {/* <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script> */}

        {/* <script src="/assets/js/main.js"></script> */}
      {/* </Helmet> */}

      <Footer/>

    </div>
  );
}

export default App;
