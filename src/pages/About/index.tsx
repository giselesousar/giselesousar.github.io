import "./styles.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <span className="section__subtitle">Minha introdução</span>

      <div className="about__container container grid">
        <p className="about__description">
          Desenvolvedora Mobile com sólida experiência em React Native,
          enfatizando aprimoramento e manutenção de aplicativos multiplataforma
          para proporcionar a melhor experiência ao usuário. Proficiente em
          metodologias ágeis como Scrum e Kanban, colaborando com equipes
          multifuncionais para eficiente entrega de projetos e recursos. Também
          atuei como Desenvolvedora Full Stack, trabalhando em equipe no
          desenvolvimento de aplicativos e sistemas web personalizados para
          clientes, incluindo um website completo para gerenciamento de estoque,
          orçamentos, pedidos, promoções e produtos. Sou apaixonada por inovação
          e constantemente busco novos desafios para aprimorar minhas
          habilidades técnicas.
        </p>
        <div className="about__info">
          {/*<div>
                        <span className="about__info-title">02+</span>
                        <span className="about__info-name">Years <br /> experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">02+</span>
                        <span className="about__info-name">Years <br /> experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">02+</span>
                        <span className="about__info-name">Years <br /> experience</span>
                    </div>*/}
          <div className="about__buttons">
            <a
              download=""
              href="/static/pdf/resume.pdf"
              className="button button-flex"
            >
              Baixar CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
