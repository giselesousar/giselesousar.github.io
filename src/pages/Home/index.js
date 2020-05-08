import React from 'react';

import './styles.css';

import {FiInstagram, FiGithub, FiMail} from 'react-icons/fi'

import {Container, Navbar, Nav} from 'react-bootstrap';




class Home extends React.Component{
    render(){
        return(
            <Container fluid="true"className="justify-content-center">
   <Container style={{ width: "45%" }} className="justify-content-center">
       
                <section className="center-block text-center center">
                    <h1>GISELE RIBEIRO</h1>
                    <div className="paragrafo-container">
                        <p>Olá! Me chamo Gisele e sou aluna do 5º período do curso de Ciência da Computação na Universidade Federal do Piauí. Sou formada em técnico em Informática pelo Instituto Federal do Piauí.</p>
                        <p>Atualmente, estou desenvolvendo habilidades em HTML, CSS e JavaScript com o uso do framework React. Também faço parte de um programa de iniciação científica na área de Redes de sensores sem fio.</p>
                        <p>Linguagens: C, Java, Python, JavaScript, VHDL.</p>
                    </div>
                    <div className="icons-links">
                        <a href="https://www.gmail.com/"><FiMail size={16} color="#ffdd1f"/></a>
                        <a href="https://github.com/giselesousar"><FiGithub size={16} color="#ffdd1f"/></a>
                        <a href="https://www.instagram.com/giselesousa_r/"><FiInstagram size={16} color="#ffdd1f"/></a>
                    </div>
                    <hr/>
                    <Navbar className="custom-nav justify-content-center" >
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{ width: "100%" }} className="mr-auto justify-content-center">
      <Nav.Link className="item active"  href="http://localhost:3000/">Home</Nav.Link>
      <Nav.Link className="item" href="http://localhost:3000/projects">Projects</Nav.Link>
      <Nav.Link className="item" href="http://localhost:3000/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
                </section>
                </Container>
            </Container>
        )
    }
}

export default Home;