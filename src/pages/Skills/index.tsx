import "./styles.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Meu nível técnico</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__header">
            <i className="uil uil-server-network skills__icon"></i>

            <div>
              <h1 className="skills__title">Desenvolvedora Mobile</h1>
              <span className="skills__subtitle">Mais de 3 anos</span>
            </div>
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <h3 className="skills__name">React Native</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">JavaScript</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">TypeScript</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">Expo</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">React Query</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">Jest</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">React Native Testing Library</h3>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <div className="skills__header">
            <i className="uil uil-brackets-curly skills__icon"></i>

            <div>
              <h1 className="skills__title">Desenvolvedora Frontend</h1>
              <span className="skills__subtitle">Mais de 3 anos</span>
            </div>
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <h3 className="skills__name">HTML</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">CSS</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">JavaScript</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">React</h3>
            </div>
            <div className="skills__data">
              <h3 className="skills__name">Angular</h3>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Skills;
