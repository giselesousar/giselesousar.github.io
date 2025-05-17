import "./styles.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Get in Touch</span>

      <div className="contact__container container">
        <p>Do you have any questions or want to collaborate?</p>
        <p>Connect with me through social media or send me an email.</p>
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
