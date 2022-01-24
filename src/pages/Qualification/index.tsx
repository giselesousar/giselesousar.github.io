import './styles.css';

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Technician</h3>
                                    <span className="qualification__subtitle">Federal Institute of Piaui</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt calendar__icon"></i>
                                        JAN 2014 - DEC 2017
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
                                    <h3 className="qualification__title">Computer Scientist</h3>
                                    <span className="qualification__subtitle">Federal University of Piauí</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt calendar__icon"></i>
                                        2018 - Present
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">

                                <div>
                                    <h3 className="qualification__title">IoT Researcher</h3>
                                    <span className="qualification__subtitle">Federal University of Piauí</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt calendar__icon"></i>
                                        AGO 2019 - SEP 2021
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
                                </div>

                                <div>
                                    <h3 className="qualification__title">Web Developer Intern</h3>
                                    <span className="qualification__subtitle">Brazil - Korp</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt calendar__icon"></i>
                                        JUN 2021 - DEC 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;