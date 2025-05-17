import "./styles.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Education & Experience</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Information Technology (Technical Degree)
                </h3>
                <span className="qualification__subtitle">IFPI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  JAN 2014 - DEZ 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Bachelor of Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Federal University of Piauí
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  MAR 2018 - MAI 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Web Developer Internship
                </h3>
                <span className="qualification__subtitle">Brazil - KORP</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  JUN 2021 - DEZ 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Web Developer Internship
                </h3>
                <span className="qualification__subtitle">TCE - PI</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  JAN 2022 - MAI 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mobile Developer</h3>
                <span className="qualification__subtitle">Brazil - nav9</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  MAI 2022 - PRESENT
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
