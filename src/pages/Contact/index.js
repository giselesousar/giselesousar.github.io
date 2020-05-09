import React from 'react';
import {Container} from 'react-bootstrap';
import {FiInstagram, FiGithub, FiMail} from 'react-icons/fi'
import Navbar from '../Components/Navbar/NavbarComponent'
import Footer from '../Components/Footer/FooterComponent'


class Contact extends React.Component{
    render(){
        return(
            <Container fluid="true"className="justify-content-center">
                               <div className="links-navbar">
                    <Navbar />    
                </div>
   <Container style={{ width: "80%" }} className="justify-content-center">
       
                <section className="center-block text-center center">
                    <h1>Contato</h1>
                    <div className="paragrafo-container">
                        <p></p>
                    </div>

                    <Container style={{ width: "70%" }} >
                    <div className="icons-links">
                        <a href="https://www.gmail.com/"><FiMail size={16} color="#ffdd1f"/></a>
                        <a href="https://github.com/giselesousar"><FiGithub size={16} color="#ffdd1f"/></a>
                        <a href="https://www.instagram.com/giselesousa_r/"><FiInstagram size={16} color="#ffdd1f"/></a>
                    </div>
                    
</Container>
                </section>
                </Container>
                <Footer />
            </Container>
        )
    }
}
export default Contact;