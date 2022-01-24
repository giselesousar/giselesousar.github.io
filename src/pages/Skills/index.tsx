import './styles.css';

const Skills = () => {

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                    <div className='skills__content'>
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>

                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className="skills__subtitle">More than 4 years</span>
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
                    <div>
                        <div className='skills__content'>
                            <div className="skills__header">
                                <i className="uil uil-server-network skills__icon"></i>

                                <div>
                                    <h1 className="skills__title">Backend developer</h1>
                                    <span className="skills__subtitle">More than 2 years</span>
                                </div>

                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <h3 className="skills__name">JavaScript</h3>
                                </div>
                                <div className="skills__data">
                                    <h3 className="skills__name">C#</h3>
                                </div>
                                <div className="skills__data">
                                    <h3 className="skills__name">NodeJS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
            </div>
        </section>
    )
}

export default Skills;