import "./styles.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Introduction</span>

      <div className="about__container container grid">
        <p className="about__description">
          Mobile Developer with solid experience in React Native, focused on
          improving and maintaining cross-platform applications to optimize user
          experience. Proficient in agile methodologies (Scrum, Kanban),
          collaborating with cross-functional teams to deliver projects
          eﬃciently. I also have experience as a Full Stack Developer, working
          on the development of web systems and custom applications. Passionate
          about innovation and always seeking new challenges to enhance my
          technical skills.
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
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
