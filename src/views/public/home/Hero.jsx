import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1>Welcome to Day</h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
