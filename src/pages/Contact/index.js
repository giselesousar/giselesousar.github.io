import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {FiInstagram, FiGithub, FiMail} from 'react-icons/fi'

class Contact extends React.Component{
    render(){
        return(
            <Container fluid="true"className="justify-content-center">
   <Container style={{ width: "80%" }} className="justify-content-center">
       
                <section className="center-block text-center center">
                    <h1>Contato</h1>
                    <div className="paragrafo-container">
                        <p></p>
                    </div>
                    <div className="links-nav">

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
      <Nav.Link className="item"  href="http://giselesousar.github.io/">Home</Nav.Link>
      <Nav.Link className="item" href="http://giselesousar.github.io/projects">Projetos</Nav.Link>
      <Nav.Link className="item active" href="http://giselesousar.github.io/contact">Contato</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
                </section>
                </Container>
            </Container>
        )
    }
}
export default Contact;