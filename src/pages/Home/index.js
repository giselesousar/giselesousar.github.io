import React from 'react';

import './styles.css';

import { FiInstagram, FiGithub, FiMail } from 'react-icons/fi'
import { Container } from 'react-bootstrap';
import Navbar from '../Components/Navbar/NavbarComponent';
import Footer from '../Components/Footer/FooterComponent';

class Home extends React.Component {
    render() {
        return (
            <Container fluid="true" className="justify-content-center">
                <div className="links-navbar">
                    <Navbar />
                </div>
                <Container style={{ width: "90%" }} className="justify-content-center">
                    <section className="center-block text-center center">
                        <div className="paragrafo-container">
                            <h1>Olá! Me chamo Gisele.</h1>
                            <Container>
                                <p>Sou aluna do 5º período do curso de Ciência da Computação na Universidade Federal do Piauí. Atualmente, estou desenvolvendo habilidades em HTML, CSS, JavaScript e Bootstrap com o uso do framework React. Também faço parte de um programa de iniciação científica na área de Redes de sensores sem fio.</p>
                                <p>Linguagens: C, Java, Python, JavaScript, VHDL.</p>
                            </Container>
                        </div>
                        <Container style={{ width: "100%" }} >
                            <div className="icons-links">
                                <a href="/"><FiMail size={16} color="rgb(255, 221, 31)" /> Mail</a>
                                <a href="https://github.com/giselesousar"><FiGithub size={16} color="rgb(255, 221, 31)" /> Github</a>
                                <a href="https://www.instagram.com/giselesousa_r/"><FiInstagram size={16} color="rgb(255, 221, 31)" /> Instagram</a>
                            </div>
                        </Container>
                    </section>
                </Container>
                <Footer />
            </Container>
        )
    }
}

export default Home;