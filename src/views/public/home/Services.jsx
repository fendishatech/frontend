import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2>Services</h2>
          <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>
                <a href="">Lorem Ipsum</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4>
                <a href="">Magni Dolores</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to={"/services"} className="mt-2 px-4 services-link">
            Check Out Our Services ...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
