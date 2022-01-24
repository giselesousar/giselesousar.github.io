import './styles.css';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/giselesousar/" target="_blank" className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/giselesousar" target="_blank" className="home__social-icon">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href="https://www.instagram.com/xlribeiro_/" target="_blank" className="home__social-icon">
                            <i className="uil uil-instagram-alt"></i>
                        </a>
                    </div>

                    <div className="home__img">
                        <svg className='home__blob' viewBox="20 35 160 150" xmlns="http://www.w3.org/2000/svg">
                            <mask id='mask0' style={{ maskType: 'alpha' }}>
                                <path d="M47.1,-60.4C60.8,-55,71.4,-40.8,73.6,-25.9C75.7,-10.9,69.4,4.8,64.7,21.5C59.9,38.3,56.8,56,46.3,66.4C35.7,76.7,17.9,79.7,1.6,77.5C-14.6,75.2,-29.3,67.8,-40.4,57.7C-51.5,47.5,-59.1,34.6,-65.7,20C-72.2,5.5,-77.7,-10.8,-72.7,-22.9C-67.8,-35,-52.4,-43,-38.6,-48.5C-24.7,-53.9,-12.4,-56.7,2.2,-59.7C16.7,-62.7,33.5,-65.9,47.1,-60.4Z" transform="translate(100 100)" />
                            </mask>
                            <g mask='url(#mask0)'>
                                <path d="M47.1,-60.4C60.8,-55,71.4,-40.8,73.6,-25.9C75.7,-10.9,69.4,4.8,64.7,21.5C59.9,38.3,56.8,56,46.3,66.4C35.7,76.7,17.9,79.7,1.6,77.5C-14.6,75.2,-29.3,67.8,-40.4,57.7C-51.5,47.5,-59.1,34.6,-65.7,20C-72.2,5.5,-77.7,-10.8,-72.7,-22.9C-67.8,-35,-52.4,-43,-38.6,-48.5C-24.7,-53.9,-12.4,-56.7,2.2,-59.7C16.7,-62.7,33.5,-65.9,47.1,-60.4Z" transform="translate(100 100)" />
                                <image 
                                    className='home__blob-img' 
                                    x={36} 
                                    y={54} 
                                    xlinkHref='/static/img/perfil.png'
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hi, I'm Gisele</h1>
                        <h2 className="home__subtitle">Full Stack developer</h2>
                        <p className="home__description">Experience in web development and mobile development knowledge, producing quality work.</p>
                        <a href="#contact" className="button button-flex">
                            Contact Me <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button-flex">
                        <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home;