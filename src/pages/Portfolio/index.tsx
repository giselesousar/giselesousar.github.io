import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My work</span>
      <div className="portfolio__container container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/static/img/construrapi.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">Construrapi</h3>
              <p className="portfolio__description">
                Mobile app for construction materials sales and delivery.
                Technologies: React Native, Expo, Node.js, GraphQL, TypeScript.{" "}
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.construrapi.construrapi"
                target="_blank"
                rel="noreferrer"
                className="button button-flex button-small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="portfolio__content grid">
            <img
              src="/static/img/emotion.png"
              alt=""
              className="portfolio__img"
            />

            <div className="portfolio__data">
              <h3 className="portfolio__title">E-motion</h3>
              <p className="portfolio__description">
                Mobile app to support healthcare professionals in monitoring
                patients with psychological issues. Technologies: React Native,
                Node.js, TypeScript
              </p>
              <a
                href="https://github.com/ES2-UFPI/e-motion"
                target="_blank"
                rel="noreferrer"
                className="button button-flex button-small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
