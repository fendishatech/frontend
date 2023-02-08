import { Link } from "react-router-dom";
import { Pt1, Pt2, Pt3 } from "../../../assets/Images";
import "../../../assets/styles/public/postcard.scss";

const Experiences = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <span>Our Experiences</span>
          <h2>Our Experiences</h2>
          <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </p>
        </div>

        <section>
          <div class="container">
            <article class="postcard light red">
              <Link to={"/experiences/2"} class="postcard__img_link" href="#">
                <img class="postcard__img" src={Pt1} alt="Image Title" />
              </Link>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title red">
                  <a href="#">Project Title</a>
                </h1>
                <div class="postcard__subtitle small">
                  <time datetime="2020-05-25 12:00:00">
                    <i class="fas fa-calendar-alt mr-2"></i> May 25th 2020
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item play red">
                    <Link to={"/experiences/2"} href="#">
                      <i class="fas fa-play mr-2"></i>Read More
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experiences;
