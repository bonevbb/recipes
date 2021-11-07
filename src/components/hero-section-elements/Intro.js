
export default function Intro(props){
    return (
      <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9 text-center">
                      <h1>{props.title}</h1>
                      <h2>{props.desc}</h2>
                    </div>
                  </div>
                  <div className="text-center">
                    <a href="#about" className="btn-get-started scrollto">{props.buttonText}</a>
                  </div>
              </div>
          </div>
      </section>
    );
}