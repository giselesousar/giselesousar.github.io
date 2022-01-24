import Navbar from '../../components/Navbar';
import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Qualification from '../Qualification';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';
import './styles.css';
import { useEffect, useState } from 'react';

const Main = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Portfolio />
            <Contact />
            <Footer />
            { scrollPosition >= 500 &&
                <div>
                    <a href="#home" className="scrollup" id="scroll-up">
                        <i className="uil uil-arrow-up scrollup__icon"></i>
                    </a>
                </div>
            }
        </>
    )
}

export default Main;