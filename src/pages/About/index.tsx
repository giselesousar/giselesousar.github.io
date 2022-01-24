import './styles.css'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <p className="about__description">
                I'm passionate about technology, especially Front-end development, and I'm always looking for new tools that allow the creation of increasingly optimized software. Seeking to improve myself in this area, I am currently interested in the study of technologies such as React, React Native, Bootstrap, Angular, and others.                </p>
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
                        <a download="" href="/static/pdf/resume.pdf" className="button button-flex">
                            Download CV <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;