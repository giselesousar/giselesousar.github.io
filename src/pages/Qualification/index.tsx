import "./styles.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minhas qualificações</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Técnico em Informática</h3>
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
                  Bacharel em Ciência da Computação
                </h3>
                <span className="qualification__subtitle">
                  Universidade Federal do Piauí
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  2018 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Estagiário em Desenvolvimento Web
                </h3>
                <span className="qualification__subtitle">Brasil - Korp</span>
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
                  Estagiário em Desenvolvimento Web
                </h3>
                <span className="qualification__subtitle">
                  Tribunal de Contas do Estado do Piauí
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  JAN 2022 - MAI 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desenolvedora Mobile</h3>
                <span className="qualification__subtitle">Brasil - Nav9</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar__icon"></i>
                  MAI 2022 - PRESENTE
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
