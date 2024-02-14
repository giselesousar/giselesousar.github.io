import "./styles.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contato</h2>
      <span className="section__subtitle">Entre em contato</span>

      <div className="contact__container container">
        <p>Tem alguma pergunta ou deseja colaborar?</p>
        <p>
          Conecte-se comigo através das redes sociais ou envie-me um e-mail.
        </p>
        <div className="contact_content">
          <a
            href="https://www.github.com//giselesousar/"
            target="_blank"
            rel="noreferrer"
            className="contact__information"
          >
            <i className="uil uil-github contact__icon"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/giselesousar/"
            target="_blank"
            rel="noreferrer"
            className="contact__information"
          >
            <i className="uil uil-linkedin contact__icon"></i>
          </a>

          <a
            href="mailto:giselesousar@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact__information"
          >
            <i className="uil uil-envelope contact__icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
